const { authenticate } = require('../auth/authenticate');
const Orgs = require('../models/organization-model.js');

module.exports= server =>{
    server.get('/api/organizations', authenticate, getOrganizations)
    server.get('/api/organizations/:id', getAOrg)
    server.get('/api/donor/:id', getADonor)
}

const getTest = (req, res) =>{
    res.status(200).json('checking in');
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

const getAOrg = async(req, res)=>{
    Orgs.findOrgById((req.params.id))
    .then(data =>{
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
// }
// const getADonor = (req, res)=>{
//     Orgs.findDonor((req.params.id))
//     .then(data =>{
//         res.status(200).json(data)
//     })
//     .catch(err =>{
//         res.status(500).json({ message: ` Failed to get that Donors`, error: err });
//     })
// }
// const getAllDonors = (req, res) =>{
//     Orgs.findOrgDonors(req.params.org_id)
//     .then(data => {
//         res.status(200).json(data)
//     })
//     .catch(err => {
//         res.status(500).json({ message: ` Failed to get all Donors`, error: err });
//       });
// }
// const getAllOrgCampaigns = (req, res)=>{
//     Orgs.findsOrgCampaigns(req.params.org_id)
//     .then(data => {
//         res.status(200).json(data);
//       })
//       .catch(err => {
//         res.status(500).json({ message: ` Failed to get all Campaigns`, error: err });
//       });
// }

