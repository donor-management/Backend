const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donors').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('donors').insert([
        {
          "org_id": 1,
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": 1000, 
        },
        {
          "org_id": 2,
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": 0, 
        },
        {
          "org_id": 2,
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": 0, 
        },
        {
          "org_id": 3,
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": 0, 
        },
        {
          "org_id": 3,
          "name": faker.name.findName(),
          "email": faker.internet.email(),
          "last_contact": faker.date.past() ,
          "total_donations": 0, 
        },
        

      ]);
    });
};
