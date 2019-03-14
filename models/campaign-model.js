const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
  add,
  find,
  findByOrg,
  findDonations,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('campaigns');
}
async function findByOrg(id){
  const campaigns =  await db('campaigns').where('org_id', id)
  const fullcampaigns = await Promise.all(campaigns.map(camp => findById(camp.id)))
  return fullcampaigns
}
function findDonations(id){
    return db('donations')
    .where('campaign_id', id)
  }
function findBy(filter) {
  return db('campaigns').where(filter);
}
async function add(campaign) {
  const [id] = await db('campaigns').insert(campaign);
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
