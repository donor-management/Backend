const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);
const DON = require('./donors-model')
module.exports = {
    findByOrg,
}

async function findByOrg(id){
    let campaigns = await db('campaigns').where('org_id', id).select('id')
    campaigns = await Promise.all(campaigns.map(camp => db('donations').where('campaign_id', camp.id ).select('campaign_id','amount', "donor_id")))
    // campaigns.forEach(camp => console.log(camp.donations))
    // campaigns.forEach(camp => console.log(camp.campaign.))
//     const campaignDonations = await Promise.all(campaigns.map(camp => db('donations').where('campaign_id', camp.id ).select('amount')
//  ))


    // const donors = await db('donors').where('org_id', id)
    // const donorsDonations = await Promise.all(donors.map(donor => {
    //        return db('donations').where('donor_id', donor.id )
    // }))
    
 
    

    return {
        campaigns,
       
        
    }
   
    
}