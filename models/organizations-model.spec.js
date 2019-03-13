const db = require('../data/dbConfig.js');
const Orgs = require('./organization-model')

describe('ORGANIZATION TESTING', () => {
    afterAll(async ()=>{
        await db('organizations').truncate();
       });
    describe('findOrgById', () => {
        it('returns an obj w org, donors and campaigns', () => {
            const org =  Orgs.findOrgById(1)
            expect(org).toEqual(expect.arrayContaining());
        });
    });
});