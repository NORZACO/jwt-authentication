# Simple Web Express JWT

This is a simple web application that demonstrates how to use JSON Web Tokens (JWTs) for authentication in an Express.js application.

## Installation

To install the application, clone the repository and navigate to the project directory:

Then, install the dependencies:

## Configuration

The application requires a `.env` file with the following variables:

- `JWT_SECRET`: a secret key used to sign and verify JWTs
- `PORT`: the port on which to run the server (default is `3000`)

Create a `.env` file in the root directory of the project and add the required variables:

## Usage

To start the server, run:

This will start the server at `http://localhost:3000`.

### Routes

#### POST /register

Register a new user.

Example request:


# The task

In this lesson, we learnt JSON Web Token. This task requires you to change this application so that it uses the SQL database to store users. After signing up, users need to be added to the database (Instead of just to an array as is currently the case). The /users endpoint should return the list of all current users (their emails).



# The task

In this task you need to create the following REST API:

* The API will work with TODO item model, it has:
  * Name - string
  * Deadline - date
  * Points - number
* Create the REST API with three endpoints:
  * GET /todo – gets all todo items
  * GET /todo/:id – gets todo item of selected id
  * POST /todo – creates a todo item
  * DELETE /todo/:id – delete todo item of select id
* Create the user authentication without using PassportJS (with Auth0 or JWT). Only logged-in users should be able to add and delete todo items
* All todo items are stored in a SQL database

Next, create documentation for the API, either using Postman or Swagger.
This doesn’t have to be a Web application – you don’t have to create views, and the JSON response is also acceptable.
