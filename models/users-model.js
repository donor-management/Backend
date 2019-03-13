const knex = require('knex');
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development);

module.exports = {
  add,
  find,
  findBy,
  findById,
};
function find() {
  return db('organizations').select('id', 'username');
}
function findBy(filter) {
  return db('organizations').where(filter);
}
async function add(user) {
  const [id] = await db('organizations').insert(user);
  return findById(id);
}
function findById(id) {
  return db('organizations').select('id', 'username', 'email', 'org_name')
    .where({ id })
    .first();
}
