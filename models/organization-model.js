const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports={
    find,
    findOrgById,
    findDonor,
    update,
    remove
}

function find(){
    return db('organizations').select('id', 'username', 'org_name');
}
async function findOrgById(id){
    const organization = await db('organizations').where({id}).first().select('id', 'username', 'org_name', 'email')
    const donorsStart = await db('org_donors').where('org_id', id)
    const donors = await Promise.all(donorsStart.map( donor => 
        db('donors').where('id', donor.donor_id)))
    const campaigns = await ( db('campaigns').where( 'org_id', id ))
    return ({
        organization,
        donors,
        campaigns   
     })
}
async function findDonor(id){
    const donorsStart = await db('org_donors').where('org_id', id)
    const donors = await Promise.all(donorsStart.map( donor => 
        db('donors').where('id', donor.donor_id)))
    return(donors)
}
async function update(id, changes){
    return await db('organizations')
    .where({id})
    .update(changes)
    .then(count => (count > 0 ? findOrgById(id): null))
}
async function remove(id){
    const donors = await db('org_donors').where({'org_id': id}).del()
    const campaigns = await ( db('campaigns').where( {'org_id': id })).del()
    const organization = await db('organizations').where({'id': id}).del();
    return {
        donors,campaigns,organization
    }
}
