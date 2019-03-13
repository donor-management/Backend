const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('campaigns').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('campaigns').insert([
        {
          "org_id": 1,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
        {
          "org_id": 1,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
        {
          "org_id": 2,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
        {
          "org_id": 2,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
        {
          "org_id": 3,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
        {
          "org_id": 3,
          "title": faker.company.catchPhrase(),
          "cause": faker.random.word(), 
          "description": faker.lorem.paragraph(), 
          "cash_goal": faker.random.number({'min': 1000, 'max': 1000000}),
          "funds_received": faker.random.number({'min': 0, 'max': 999}), 
          "active_campaign": faker.random.boolean()
        },
       
     
      ]);
    });
};
