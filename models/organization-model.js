const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);
const Donors = require('./donors-model')

module.exports={
    find,
    findOrgById,
    findDonor,
    findCampaigns,
    update,
    remove,
}

function find(){
    return db('organizations').select('id', 'username', 'org_name');
}
async function findOrgById(id){
    const organization = await db('organizations').where({id}).first().select('id', 'username', 'org_name', 'email')
    const donors = await ( db('donors').where( 'org_id', id ))
    const fullDonors = await Promise.all(donors.map(donor => Donors.findById(donor.id)))
    const campaigns = await ( db('campaigns').where( 'org_id', id ))
    return ({
        organization,
        donors: fullDonors,
        campaigns   
     })
}
async function findDonor(id){
    const donors =  await db('donors').where('org_id', id)
    const donations = await Promise.all(donors.map(donor => db('donations').where('donor_id', donor.id).select('donor_id', 'amount')))
    return {donors, donations}
   
}
async function findCampaigns(id){
    const campaigns = await db('campaigns').where('org_id', id)
    const donations = await Promise.all(campaigns.map(campaign => db('donations').where('campaign_id', campaign.id).select('campaign_id', 'amount')))
    const contributions = await donations.forEach(element => { element.forEach(e2 =>{ console.log(e2.amount)})})
    return {campaigns, donations, contributions}
}
async function update(id, changes){
    return await db('organizations')
    .where({id})
    .update(changes)
    .then(count => (count > 0 ? findOrgById(id): null))
}
async function remove(id){
    const donors = await ( db('donors').where( 'org_id', id ))
    const campaigns = await ( db('campaigns').where( {'org_id': id })).del()
    const organization = await db('organizations').where({'id': id}).del();
    return {
        donors,campaigns,organization
    }
}