const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    findByOrg,
}

async function findByOrg(id){
    const campaigns = await db('campaigns').where('org_id', id)
    const donors = await db('donors').where('org_id', id)
    const donorsDonations = await Promise.all(donors.map(donor => {
           return db('donations').where('donor_id', donor.id )
    }))
    const campaignDonations = await Promise.all(campaigns.map(camp => {
       
           return db('donations').where('campaign_id', camp.id )
            
    
    }))
    console.log(campaignDonations)
    console.log(donorsDonations)

    return {
        campaigns,
        campaign_donations: campaignDonations,
        donors,
        donor_donations: donorsDonations
    }
   
    
}