const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donations').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('donations').insert([
        {
          campaign_id: 1,
          donor_id: 1,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: 2,
          donor_id: 1,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: 3,
          donor_id: 2,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: 4,
          donor_id: 3,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: 5,
          donor_id: 4,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: 6,
          donor_id: 5,
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        }

      ]);
    });
};
