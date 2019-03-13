const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
    findById,
    findByOrg,
    add,
    update,
    remove
}

function findById(id){
    return db('donations').where({ id }).first();
}
async function findByOrg(id){
    let campaigns = await db('campaigns').where('org_id', id).select('id')
    campaigns = await Promise.all(campaigns.map(camp => db('donations').where('campaign_id', camp.id ).select('campaign_id','amount', "donor_id")))
    return {campaigns}  
}
async function add(donation){
    const [id] = await db('donations').insert(donation);
    return findById(id);
}
async function update(id, changes){
    return await db('donations')
    .where({id})
    .update(changes)
    .then(count => (count > 0 ? findById(id): null))
}
function remove(id){
    return db('donations').where( {id}).del();
    
}