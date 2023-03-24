var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  if(!token)
  {
      res.status(200).json({success:false, message: "Error! Token was not provided."});
  }
  const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET );
  res.status(200).json({
    success:true,
    data:{
      userId:decodedToken.userId,
      email:decodedToken.email,
      users: ['user1', 'user2', 'user3']
    }
  });
});

module.exports = router;



/*

// Import necessary packages
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// GET users listing route
router.get('/', function(req, res, next) {
  // Get the JWT token from the Authorization header
  const token = req.headers.authorization.split(' ')[1];

  // If the token was not provided, return an error response
  if (!token) {
      return res.status(200).json({
          success: false,
          message: "Error! Token was not provided."
      });
  }

  try {
    // Verify the JWT token using the secret key and get the decoded token data
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    // Return a success response with the user data and list of users
    return res.status(200).json({
      success: true,
      data: {
        userId: decodedToken.userId,
        email: decodedToken.email,
        users: ['user1', 'user2', 'user3']
      }
    });
  } catch (err) {
    // If the JWT verification fails, return an error response
    return res.status(401).json({
      success: false,
      message: "Error! Invalid token."
    });
  }
});

// Export the router
module.exports = router;
*/