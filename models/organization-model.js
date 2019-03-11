const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);


module.exports={
    findsOrgCampaigns,
    find,
    findOrgDonors,
    findDonor,
    findOrgById
}

function find(){
    return db('organizations').select('id', 'username', 'org_name');
}
async function findOrgById(id){
    const org = await db('organizations').where({id}).first().select('id', 'username', 'org_name', 'email')
    const donors = await db('org_donors').where('org_id', id)
    const campaigns = await ( db('campaigns').where( 'org_id', id ))
    return ({
        org,
        donors,
        campaigns   
     })
}


function findsOrgCampaigns(id){
    return 
}

function findOrgDonors(id){
    return db('org_donors')
    .where('org_id', id)
}
function findDonor(id){
    return db('donors')
    .where({ id })
    .first();
}