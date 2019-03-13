const db = require('../data/dbConfig.js');
const Users = require('./users-model.js')

describe('ORGANIZATION TESTING', () => {
    afterAll(async ()=>{
        await db('organizations').truncate();
       });
});