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

**201:** The user is created on database. Besides, it will return the user unique id.

**409:** Conflict. User not created.

### Delete a user

* **Endpoint:** /api/users/delete/user_id/

* **Method:** DELETE

* **Response:**

**200:** The user has been deleted.

**404:** User id not found on database.

### Get all users

* **Endpoint:** /api/users/

* **Method:** GET

* **Response:**

**200:** Operation went ok. Besides, it will return the list of users like this:

``` json
[{
    "id": "",
    "name": "",
    "username": "",
    "email": "",
    "company": ""
},
{
    "id": "",
    "name": "",
    "username": "",
    "email": "",
    "company": ""
}]

```

### Authenticate

* **Endpoint:** /api/users/authenticate/

* **Method:** POST
* **Body:**

``` json
{
    "username": "",
    "password": ""
}
```

* **Response:**

**200:** User successfully authenticated.

**401:** Unauthorized. Wrong login infos.

**404:** The user you are trying to authenticate doesn't exists.

### Submit a job to queue

* **Endpoint:** /api/jobs/submit/

* **Method:** POST

* **Body:**

``` json
{
    "code": "",
    "data": "",
    "running_commands": ""
}
```

* **Response:**

**200:** Job successfully submited.

### Get jobs from the queue

* **Endpoint:** /api/jobs/getqueue/

* **Method:** GET

* **Body:**

``` json
[{
    "code": "",
    "data": "",
    "running_commands": ""
},
{
    "code": "",
    "data": "",
    "running_commands": ""
}]
```

* **Response:**

**200:** Job successfully submited.

### Get status from all jobs

* **Endpoint:** /api/jobs/

* **Method:** GET

* **Response:**

**200:** The API was able to get the status of all jobs. Besides, it will return a json lije this:

``` json

[{
    "id": "",
    "duration": "",
    "status": ""
},
{
    "id": "",
    "duration": "",
    "status": ""
}]

```

### Get status of a specific job

* **Endpoint:** /api/jobs/job_id/

* **Method:** GET

* **Response:**

**200:** The API was able to get the status of the job you want. Besides, it will return a json lije this:

``` json

{
    "id": "",
    "duration": "",
    "status": ""
}

```

**404:** The job you are searching does not exists.

### Get the results from all jobs

* **Endpoint:** /api/results/

* **Method:** GET

* **Response:**

**200:** The API was able to get the results from all the jobs.

``` json

[{
    "id": "",
    "duration": "",
    "results": {}
},
{
    "id": "",
    "duration": "",
    "results": {}
}]

```

### Get the results from a specific job

* **Endpoint:** /api/results/job_id/

* **Method:** GET

* **Response:**

**200:** The API was able to get the results of the job you want. Besides, it will return a json lije this:

``` json

{
    "id": "",
    "duration": "",
    "results": {}
}

```

**404:** The job you are searching do not exists.