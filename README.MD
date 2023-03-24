


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

