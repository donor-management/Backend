const faker = require('faker');
const bcrypt = require('bcryptjs')

const hash = bcrypt.hashSync('pass123', 12)

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('organizations').del()
    .then(function () {
      // Inserts seed entries
      return knex('organizations').insert([
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password": hash, "email":faker.internet.email(), "org_name": faker.company.companyName() },
      ]);
    });
};
