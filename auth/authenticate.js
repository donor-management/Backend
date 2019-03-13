require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_SECRET || 'this is just a test';

// quickly see what this file exports
module.exports = {
  authenticate,
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');
  
  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).json(err);
      }
      else{
        req.decoded = decoded;
        console.log(decoded)
        next();
      } 
    })
  } else {
    res.status(401).json({ error: 'No token provided, must be set on the Authorization Header'});
  }
}