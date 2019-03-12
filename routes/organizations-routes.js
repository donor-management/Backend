const { authenticate } = require('../auth/authenticate');
const Orgs = require('../models/organization-model.js');

module.exports= server =>{
    server.get('/api/organizations', getOrganizations)
    server.get('/api/organizations/:id', getAOrganization)
    server.get('/api/donor/:id', getADonor)
    server.put('/api/organizations/:id', updateOrganization)
    server.delete('/api/organizations/:id', deleteOrganization)
}

const getOrganizations = (req, res) =>{
    Orgs.find()
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(500).json({ message: ` Failed to get all Organizations`, error: err });
    })
}
const getAOrganization = async(req, res)=>{
    Orgs.findOrgById((req.params.id))
    .then(data =>{
        data.organization === undefined ? res.status(404).json({message: "Sorry this user has been deleted, please create a new user"}):
        res.status(200).json(data) 
    })
    .catch(err =>{
        res.status(500).json({ message: ` Failed to get that Org`, error: err });
    })
}
const getADonor = async(req, res)=>{
    Orgs.findDonor((req.params.id))
    .then(data =>{
        res.status(200).json(data) 
    })
    .catch(err =>{
        res.status(500).json({ message: ` Failed to get that donor`, error: err });
    })
}
const updateOrganization = (req, res)=>{ 

    Orgs.update(req.params.id, req.body)
    .then(count =>{
        res.status(200).json(count)   
     })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: `Internal server error. Could not update User`, error: err });
    });
}
const deleteOrganization = (req, res) =>{
    Orgs.remove(req.params.id)
    .then(userDeleted => {
        if (userDeleted > 0) {
          res.status(200).json(userDeleted);
        } else {
          res.status(404).json({ message: `The User with the specified ID does not exist`, userDeleted });
        }
      })
      .catch(err => {
        res.status(500).json({ message: `Failed to delete User`, error: err });
      });
}