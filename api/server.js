const express = require('express');
const server = express();

const cors = require('cors');
const helmet = require('helmet');

server.use(helmet());
server.use(cors());
server.use(express.json());

const configureAuthRoutes = require('../routes/auth-routes.js');
const configureCampaignRoutes = require('../routes/campaign-routes');
const configureDonationsRoutes = require('../routes/donations-routes');
const configureDonorRoutes = require('../routes/donors-routes');
const configureOrgRoutes = require('../routes/organizations-routes.js');


configureAuthRoutes(server)
configureCampaignRoutes(server)
configureDonationsRoutes(server)
configureDonorRoutes(server)
configureOrgRoutes(server)


server.get('/', async(req, res)=>{
    res.status(200).json('Sanity Check !')
})

module.exports = server;
