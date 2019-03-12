const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
  add,
  find,
  findDonations,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('campaigns');
}
function findDonations(id){
    return db('donations')
    .where('campaign_id', id)
  }
function findBy(filter) {
  return db('campaigns').where(filter);
}
async function add(donor) {
  const [id] = await db('campaigns').insert(donor);
  return findById(id);
}

async function findById(id) {
    function add(accumulator, a) {
      return accumulator + a;
    }
    const campaign = await db('campaigns').where({ id }).first();
    const donations = await ( db('donations').where('campaign_id', id ))
    if(donations.length < 1){
      return {campaign, donations: 'This Campaign has no contributions yet.' }
    } 
    else{
    let total = donations.map(don => don.amount).reduce(add)
    campaign.funds_received = total
    return {
      campaign,
      donations
    }
  }
}





async function update(id, changes){
  return await db('campaigns')
  .where({id})
  .update(changes)
  .then(count => (count > 0 ? findById(id): null))
}

async function remove(id){
  const removeCampaign = await (db('campaigns').where({'id': id})).del();
  const removeFromDonations = await db('donations').where({'campaign_id': id}).del();
  return {
    removeCampaign,removeFromDonations
  }
}
