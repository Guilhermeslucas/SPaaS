from flask import Flask, request, Response
import json
import pymongo
from flask_cors import CORS
from bson.json_util import dumps, loads
import os
from azure.storage.blob import BlockBlobService, PublicAccess
from celery import Celery
import subprocess
import uuid

app = Flask(__name__)
CORS(app)

db_client = pymongo.MongoClient(os.environ['SPASS_CONNECTION_STRING']).spassDatabase
seismic_blob = BlockBlobService(account_name='seismicdata', account_key=os.environ['SPASS_DATA_BLOB_KEY'])
seismic_blob.create_container('seismic-data')
seismic_blob.set_container_acl('seismic-data', public_access=PublicAccess.Container)
seismic_blob.create_container('seismic-tools')
seismic_blob.set_container_acl('seismic-tools', public_access=PublicAccess.Container)
seismic_blob.create_container('seismic-results')
seismic_blob.set_container_acl('seismic-results', public_access=PublicAccess.Container)

celery = Celery(app.name, broker=os.environ['SPASS_CELERY_BROKER'], backend=os.environ['SPASS_CELERY_BROKER'])

@celery.task
def submit_celery(tool_name, data_name, args):
    file_id = str(uuid.uuid4())
    db_client.statusCollection.insert_one({'status': 'Executing', 'job_id': file_id})
    seismic_blob.get_blob_to_path('seismic-tools', tool_name, tool_name)
    seismic_blob.get_blob_to_path('seismic-data', data_name, data_name)
    
    cmd_args = ''
    for i in range(1, len(args) + 1):
        cmd_args = cmd_args + ' ' + args[str(i)]
    
    total_cmd = './' + tool_name + cmd_args
    
    os.system(total_cmd)
    os.system('rm -rf ' + tool_name + ' ' + data_name)
    file_name = file_id + '.tar.gz'
    os.system('tar -czvf ' + file_name+ ' *.su')
    seismic_blob.create_blob_from_path('seismic-results', file_name, file_name)
    os.system('rm -rf *.su ' + file_name)

    data_register = {}
    data_register['tool'] = tool_name
    data_register['data'] = data_name
    data_register['args'] = args
    data_register['id'] = file_id
    db_client.resultsCollection.insert_one(data_register)

    db_client.statusCollection.update({'job_id': file_id}, {'$set': { 'status': 'Executed'}})
    
    return

@app.route("/healthz")
def health():
    return Response(status=200)

@app.route("/api/users/create/", methods=['POST'])
def create_user():
    user_data = request.get_json(force=True)
    result = db_client.usersCollection.find({'email': user_data['email']})
    
    if result.count() != 0:
        return Response({'message': 'This email is already in use'},status=409)

    db_id = db_client.usersCollection.insert_one(user_data).inserted_id
    if db_id:
        return Response(status=200)
    else:
        return Response(status=409)
    
@app.route("/api/users/delete/", methods=['DELETE'])
def delete_user():
    user_email = request.get_json(force=True)['email']
    result = db_client.usersCollection.delete_one({"email": user_email})
    
    if result.deleted_count:
        return Response(status=200)
    else:
        return Response(status=404)

@app.route("/api/users/", methods=['GET'])
def list_users():
    result = db_client.usersCollection.find({})
    return Response(dumps(result), status=200)

@app.route("/api/users/authenticate/", methods=['POST'])
def authenticate():
    data = request.get_json(force=True)
    result = db_client.usersCollection.find_one({'email': data['email']})
    if result:
        if result['password'] == data['pass']:
            return Response(status=200)
        else:
            return Response(status=401)
    else:
        return Response(status=401)

@app.route("/api/tasks/parameters/<tool_name>/", methods=['GET'])
def get_parameters(tool_name):
    result = db_client.toolsCollection.find_one({"name": tool_name})
    return Response(dumps(result["args"]), status=200)

@app.route("/api/tasks/submit/", methods=['POST'])
def submit_task():
    data = request.get_json(force=True)
    submit_celery.delay(data['tool'], data['data'], data['args'])
    return "SUCCESS"

@app.route("/api/results/")
def get_jobs_results():
    all_results = db_client.resultsCollection.find({})
    return Response(dumps(all_results),status=200)

@app.route("/api/status/")
def get_jobs_status():
    all_status = db_client.statusCollection.find({})
    return Response(dumps(all_status),status=200)

@app.route("/api/results/<id>")
def get_job_results(id):
    raise NotImplementedError()

@app.route('/api/data/upload/', methods=['POST'])
def upload_data():
    data = request.files.items()
    for d in data:
        data_name = d[0]
        data_content = d[1]
    
    upload_to_azure(data_name,'seismic-data',data_content)
    return "Uploaded"

@app.route('/api/data/', methods=['GET'])
def get_files_blob():
    return json.dumps(list_files('seismic-data'))

def upload_to_azure(data_name, container_name, data_content):
    data_content.save(data_name)
    seismic_blob.create_blob_from_path(container_name, data_name, data_name)
    os.system('rm -rf '+ data_name)

@app.route('/api/tools/', methods=['GET'])
def get_tools_blob():
    return json.dumps(list_files('seismic-tools'))

def list_files(container_name):
    data = seismic_blob.list_blobs(container_name)
    all_names = [d.name for d in data]
    return all_names

@app.route('/api/tools/upload/', methods=['POST'])
def upload_tool():
    data = request.files.items()
    arguments = request.form
    
    for d in data:
        data_name = d[0]
        data_content = d[1]
    
    upload_to_azure(data_name, 'seismic-tools', data_content)
    
    for a in arguments.items():
        all_arguments = a[1]

    splited = all_arguments.split(',')
    
    tool_document = {}
    tool_document['name'] = data_name
    tool_document['args'] = []
    
    for p in splited:
        name, description = p.split(':')
        new_arg = {}
        new_arg['name'] = name
        new_arg['description'] = description
        tool_document['args'].append(new_arg)
    
    db_client.toolsCollection.insert_one(tool_document)
    
    return 'Uploaded'

@app.route('/api/tools/<name>/', methods=['DELETE'])
def delete_tool(name):
    delete_blob(name, 'seismic-tools')
    return 'Deleted'

@app.route('/api/data/<name>/', methods=['DELETE'])
def delete_data(name):
    delete_blob(name, 'seismic-data')
    return 'Deleted'

def delete_blob(blob_name, container_name):
    seismic_blob.delete_blob(container_name, blob_name)

if __name__ == "__main__":
    app.run('0.0.0.0', 5000)