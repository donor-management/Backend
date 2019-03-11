const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('org_donors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('org_donors').insert([
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
        {
          org_id: faker.random.number({'min': 1, 'max': 9}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
        },
      ]);
    });
};
