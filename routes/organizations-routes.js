const { authenticate } = require('../auth/authenticate');
const Orgs = require('../models/organization-model.js');

module.exports= server =>{
    server.get('/api/donors/:id', getAllOrgCampaigns ),
    server.get('/api/donors', getAllDonors)
}

const getAllDonors = (req, res) =>{
    Orgs.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Donors`, error: err });
      });
}

const getAllOrgCampaigns = (req, res)=>{
    console.log(req.params.id)
    Orgs.findsOrgCampaigns(req.params.id)
    .then(data => {
        res.status(200).json(data);
      })
      .catch(err => {
        res.status(500).json({ message: ` Failed to get all Campaigns`, error: err });
      });
  }