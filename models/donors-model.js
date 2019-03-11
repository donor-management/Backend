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
  return db('donors').select('id', 'username');
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
