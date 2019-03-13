const db = require('../data/dbConfig.js');
const Orgs = require('./organization-model')
const Users = require('./users-model')
const faker = require('faker');
describe('ORGANIZATION TESTING', () => {
    afterAll(async ()=>{
        await db('organizations').truncate();
    });
    
describe('TESTING ROUTES', () => {
    describe('POST Orgs', () => {
        it('User.add',  async() => {
            const user = {username: `${faker.name.findName()}`, password: "tony123", email:"tony@hotMail", org_name:"Tony4Prez"}
            const org = await Users.add(user)
            expect(org.org_name).toBe('Tony4Prez');
        });
    });
    describe('GET Orgs and More', () => {
    describe('findOrgById', () => {
        it('returns an obj w org, donors and campaigns', async () => {
            const org = await Orgs.findOrgById(1)
            expect(org).toEqual(expect.objectContaining({
                "organization": expect.anything(),
                "donors": expect.anything(),
                "campaigns": expect.anything(),
            }));
        });
    });
    describe('findDonor', () => {
        it('returns an obj w donors and their donations', async () => {
            const org = await Orgs.findDonor(1)
            expect(org).toEqual(expect.objectContaining({
                "donors": expect.anything(),
                "donations": expect.anything(),
            }));
        });
    }); 
    describe('findCampaigns', () => {
        it('returns an obj w org, donors and campaigns', async () => {
            const org = await Orgs.findDonor(1)
            expect(org).toEqual(expect.objectContaining({
                "donors": expect.anything(),
                "donations": expect.anything(),
            }));
        });
    }); 
    });
    describe('updateOrg', () => {
        it('', async() => {
            const updateEmail = {email: "new"}
            const org = await Orgs.update(4, updateEmail)
                expect(org).toEqual(expect.objectContaining({
                    "organization": expect.anything(),
                    "donors": expect.anything(),
                    "campaigns": expect.anything(),
                }));
        });
       
    });
});
});