from flask import Flask
import pymongo

app = Flask(__name__)
db_client = pymongo.MongoClient('')

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/healthz")
def health():
    return "Everything is working"

@app.route("/api/users/create/", methods=['POST'])
def create_user():
    raise NotImplementedError()

@app.route("/api/users/delete/<id>")
def delete_user(id):
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
    teste_collection = db_client.testdatabase.testcollection
    dc = {'name': 'Guilherme', 'age': 24}
    teste_collection.insert_one(dc)
    app.run('0.0.0.0', 5000)