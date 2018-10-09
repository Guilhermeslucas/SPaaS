from flask import Flask, request, Response
import json
import pymongo
from flask_cors import CORS
from bson.json_util import dumps
import os

app = Flask(__name__)
CORS(app)
db_client = pymongo.MongoClient(os.environ['SPASS_CONNECTION_STRING']).spassDatabase

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/healthz")
def health():
    return "Everything is working"

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

@app.route("/api/jobs/submit/")
def submit_job():
    raise NotImplementedError()

@app.route("/api/jobs/getqueue/")
def get_jobs_queue():
    raise NotImplementedError()

@app.route("/api/jobs/")
def get_jobs_status():
    raise NotImplementedError()

@app.route("/api/jobs/<id>/")
def get_job_status(id):
    raise NotImplementedError()

@app.route("/api/results/")
def get_jobs_results():
    raise NotImplementedError()

@app.route("/api/results/<id>")
def get_job_results(id):
    raise NotImplementedError()


if __name__ == "__main__":
    app.run('0.0.0.0', 5000)