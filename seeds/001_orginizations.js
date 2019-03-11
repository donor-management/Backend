const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('organizations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('organizations').insert([
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
        {"username": faker.internet.userName(), "password":"pass123", "email":faker.internet.email(), "org_name": faker.company.companyName() },
      ]);
    });
};
