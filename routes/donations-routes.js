const { authenticate } = require('../auth/authenticate');
const Donations = require('../models/donations-model.js')

module.exports = server =>{
    server.get('/api/donations/:id/', getADonation)
    server.put('/api/donations/:id/', updateDonation)
    server.post('/api/donations/', addDonations)
    server.get('/api/organizations/:id/donations', getOrgDonations)
}

// Get a Single Donation
const getADonation = (req, res)=>{
    Donations.findById(req.params.id)
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Donation`, error: err });
    })
}
// Get Organizations Donations
const getOrgDonations = (req, res)=>{
    Donations.findByOrg(req.params.id)
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Donations`, error: err });
    })
}
// Create a Donation
const addDonations = (req,res)=>{
    let donations = req.body;
    Donations.add(donations)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
    });
}
// Update a Donation
const updateDonation = (req, res)=>{
    Donations.update(req.params.id, req.body)
    .then(count =>{
        res.status(200).json(count)   
     })
    .catch(err => {
        res.status(500).json({ message: `Internal server error. Could not update Donor`, error: err });
    });
}
// Delete a Donation
