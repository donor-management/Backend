const Donors = require('../models/donors-model.js')

module.exports = server =>{
    server.get('/donors', getAllOrgsDonors);
}

const getAllOrgsDonors = (req, res) =>{
    Donors.get()
}