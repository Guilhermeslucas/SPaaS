from flask import Flask, request, Response
import json
import pymongo

app = Flask(__name__)
db_client = pymongo.MongoClient('').spassDatabase

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/healthz")
def health():
    return "Everything is working"

@app.route("/api/users/create/", methods=['POST'])
def create_user():
    user_data = request.get_json(force=True)
    db_id = db_client.usersCollection.insert_one(user_data).inserted_id
    if db_id:
        return Response(status=200)
    else:
        return Response(status=409)
    
@app.route("/api/users/delete/<email>")
def delete_user(email):
    raise NotImplementedError()

@app.route("/api/users/")
def list_users():
    raise NotImplementedError()

@app.route("/api/authenticate/")
def authenticate():
    raise NotImplementedError()

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