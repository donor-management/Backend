const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db('campaigns');
}
function findBy(filter) {
  return db('campaigns').where(filter);
}
async function add(donor) {
  const [id] = await db('campaigns').insert(donor);
  return findById(id);
}
function findById(id) {
  return db('campaigns')
    .where({ id })
    .first();
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
