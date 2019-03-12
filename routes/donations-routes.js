const { authenticate } = require('../auth/authenticate');
const Donations = require('../models/donations-model.js')

module.exports = server =>{
    server.get('/api/organizations/:id/donations', getOrgDonations)
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
// Update a Donation
// Delete a Donation
