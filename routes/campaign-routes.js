const Campaigns = require('../models/Campaigns-model.js')

module.exports = server =>{
    server.get('/api/Campaigns', getCampaigns);
    server.get('/api/Campaigns/:id', getACampaign)
    server.post('/api/Campaigns/', addCampaign)
    server.put('/api/Campaigns/:id', updateCampaign)
    server.delete('/api/Campaigns/:id', deleteCampaign)
}
//GET Calls
const getCampaigns = (req, res) =>{
    Campaigns.find()
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Campaigns`, error: err });
    })
}
const getACampaign = (req, res) =>{
    Campaigns.findById(req.params.id)
    .then(data =>{
        data === undefined ? res.status(404).json({message:"That Campaign no longer exists or worse... they never did."}) :
        res.status(200).json(data)
        
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Organizations`, error: err });
    })
}
//POST Calls
//Requires EMAIL, NAME & ORG_ID 
const addCampaign = (req, res) =>{
    let campaign = req.body;
    Campaigns.add(campaign)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
    });
}
const updateCampaign = (req, res) =>{
    Campaigns.update(req.params.id, req.body)
    .then(count =>{
        res.status(200).json(count)   
     })
    .catch(err => {
        res.status(500).json({ message: `Internal server error. Could not update Campaign`, error: err });
    });
}
const deleteCampaign = (req,res) =>{
    Campaigns.remove(req.params.id)
    .then(CampaignDeleted => {
        if (CampaignDeleted.removeCampaign > 0) {
          res.status(200).json(CampaignDeleted.removeCampaign);
        } else {
          res.status(404).json({ message: `The Campaign with the specified ID does not exist` });
        }
      })
      .catch(err => {
        res.status(500).json({ message: `Failed to delete Campaign`, error: err });
      });
}