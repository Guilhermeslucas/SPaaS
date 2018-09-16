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


### Get a job from the queue


### Get status from all jobs


### Get status of a specific job


### Get the results from all jobs


### Get the results from a specific job

