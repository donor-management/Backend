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
  return db('donors');
}
function findBy(filter) {
  return db('donors').where(filter);
}
async function add(user) {
  const [id] = await db('donors').insert(user);

  return findById(id);
}
function findById(id) {
  return db('donors')
    .where({ id })
    .first();
}
async function update(id, changes){
  return await db('donors')
  .where({id})
  .update(changes)
  .then(count => (count > 0 ? findById(id): null))
}

async function remove(id){
  const removeDonor = await (db('donors').where({'id': id})).del();
  const removeFromOrgs = await ( db('org_donors').where( {'donor_id': id })).del()
  const removeFromDonations = await db('donations').where({'donor_id': id}).del();
  return {
    removeDonor, removeFromOrgs ,removeFromDonations
  }
}
