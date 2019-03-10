const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async(req, res)=>{
    res.status(200).json('Sanity Check !')
})



module.exports = server;
