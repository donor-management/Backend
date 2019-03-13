const Donors = require('../models/donors-model.js')
const {authenticate} = require('../auth/authenticate.js');
module.exports = server =>{
    server.get('/api/donors', authenticate, getDonors);
    server.get('/api/donors/:id', authenticate, getADonor)
    server.get('/api/donors/:id/donations', authenticate, getDonorsDonations)
    server.post('/api/donors/', authenticate, addDonor)
    server.put('/api/donors/:id', authenticate, updateDonor)
    server.delete('/api/donors/:id', authenticate, deleteDonor)
}
//GET Calls
const getDonors = (req, res) =>{
    Donors.findByOrg(req.decoded.org_id)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Donors`, error: err });
    })
}
const getADonor = (req, res) =>{
    Donors.findById(req.params.id)
    .then(data =>{
        data === undefined ? res.status(404).json({message:"That donor no longer exists or worse... they never did."}) :
        res.status(200).json(data)
        
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get that donor`, error: err });
    })
}
const getDonorsDonations = (req, res )=>{
    Donors.findDonations(req.params.id)
    .then(data =>{
        data === undefined ? res.status(404).json({message:"That donor no longer exists or worse... they never did."}) :
        res.status(200).json({donations:data})
        
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Organizations`, error: err });
    })
}
//POST Calls
//Requires EMAIL, NAME & ORG_ID 
const addDonor = (req, res) =>{
    let donor = req.body;
    Donors.add(donor)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
    });
}
const updateDonor = (req, res) =>{
    Donors.update(req.params.id, req.body)
    .then(count =>{
        res.status(200).json(count)   
     })
    .catch(err => {
        res.status(500).json({ message: `Internal server error. Could not update Donor`, error: err });
    });
}
const deleteDonor = (req,res) =>{
    Donors.remove(req.params.id)
    .then(donorDeleted => {
        if (donorDeleted.removeDonor > 0) {
          res.status(200).json(donorDeleted.removeDonor);
        } else {
          res.status(404).json({ message: `The Donor with the specified ID does not exist` });
        }
      })
      .catch(err => {
        res.status(500).json({ message: `Failed to delete Donor`, error: err });
      });
}