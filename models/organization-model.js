const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);


module.exports={
    findsOrgCampaigns,
    find,
}

function find(){
    return db('donors')
}
function findsOrgCampaigns(id){
    return db('campaigns')
    .where( 'org_id', id )
}