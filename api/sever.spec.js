const db = require('../data/dbConfig.js');
const request = require('supertest');
const server = require('./server');
const Users = require('../models/users-model');
const faker = require('faker');

describe('server.js', () => {
    const name = faker.name.findName();
    afterAll(async ()=>{
        await db('organizations').truncate();
    });
    it('should set testing environment', ()=>{
        expect(process.env.DB_ENV).toBe('testing');
    })
    describe('Get /', () => {
        it('Should return 200 ok', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200)
         });
    });
    describe('Login/Register routes', () => {
        it('Register ', async () => {
            let res = await request(server)
            .post('/api/register')
            .send ({username: name, password: "tony123", email:"tony@hotMail", org_name:"Tony4Prez"})
            expect(res.status).toBe(201)
         });
        it('Login ', async() => {
            let res = await request(server)
            .post('/api/login')
            .send ({username: name, password: "tony123"})
            expect(res.status).toBe(200)
         });
    });
});