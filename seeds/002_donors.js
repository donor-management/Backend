const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donors').del()
    .then(function () {
      // Inserts seed entries
      return knex('donors').insert([
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },
        {
          "org_id": faker.random.number({'min': 1, 'max': 9}),
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": faker.random.number({'min': 0, 'max': 1000000}), 
        },

      ]);
    });
};
