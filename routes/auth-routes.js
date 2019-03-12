// const axios = require('axios');
const { authenticate } = require('../auth/authenticate');
const Users = require('../models/users-model.js');

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  // server.get('/api/users', authenticate, );
};

const secret = process.env.JWT_SECRET || 'this is simply a test'; 

function register(req, res) {
  // implement user registration
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12); // 2 ^ n
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  
}
//Generate Token
function generateToken(user){
  const payload = {
      subject: user.id,
      username: user.username,
  };
  const options ={
      expiresIn: '30m',
  };
  return jwt.sign(payload, secret, options)
}
function login(req, res) {
  // implement user login
  let { username, password } = req.body;
  Users.findBy({ username })
    .first()
    .then(user => {
      
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // new
        res.status(200).json({
          message: `Welcome ${user.username}!, have a token...`,
          token,
          id: user.id,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
}

