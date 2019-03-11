const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);


module.exports={
    find,
    findOrgById,
    findDonor
}

function find(){
    return db('organizations').select('id', 'username', 'org_name');
}
async function findOrgById(id){
    const org = await db('organizations').where({id}).first().select('id', 'username', 'org_name', 'email')
    const donors = await db('org_donors').where('org_id', id).map(donor => findDonor(donor.donor_id))
    // const newDonors = donors
    const campaigns = await ( db('campaigns').where( 'org_id', id ))
    return ({
        org,
        donors,
        campaigns   
     })
}

async function findDonor(id){
    const donor = await db('donors').where('id', id)
    return(donor)
}

// function findOrgDonors(id){
//     return db('org_donors')
//     .where('org_id', id)
// }
// function findDonor(id){
//     return db('donors')
//     .where({ id })
//     .first();
// }