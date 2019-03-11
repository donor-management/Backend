const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donations').del()
    .then(function () {
      // Inserts seed entries
      return knex('donations').insert([
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },
        {
          campaign_id: faker.random.number({'min': 1, 'max': 5}),
          donor_id: faker.random.number({'min': 1, 'max': 5}),
          amount: faker.random.number({'min': 1, 'max': 1000000}),
          notes: faker.lorem.sentence()
        },

      ]);
    });
};
