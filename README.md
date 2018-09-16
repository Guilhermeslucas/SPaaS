# SPaaS

Seismic processing as a service (SPaaS) makes it easier for people to run their really heavy seismic workloads on Cloud Computing Plataforms.

## REST API Definition

We will use this part to show you all the endpoints my application will offer in order to complete the whole pipeline it is made for.

### Create a new user

* **Endpoint:** /api/users/create/

* **Method:** POST

* **Body:** 

``` json
{
    "name": "",
    "username": "",
    "email": "",
    "company": ""
}
```

* **Response:**
* **201:** The user is created on database. Besides, it will return the user unique id.
* **409:** Comflict. User not created.

### Delete a user

* **Endpoint:** /api/users/delete/<id>/

* **Method:** DELETE

* **Response:**
* **200:** The user has been deleted.
* **404:** User id not found on database.

### Get all users
### Authenticate
### Submit a job to queue
### Get a job from the queue
### Get status from all jobs
### Get status of a specific job
### Get the results from all jobs
### Get the results from a specific job