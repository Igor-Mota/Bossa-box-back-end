const request = require("supertest")
const app = require('../../src/app')

const truncate = require('../utils/truncate')

describe('test for create and warnig if user exists or not', () =>{
    beforeEach( async () =>{
        await truncate()
    })
    it('should return user email and name',async ()=>{   
        const response = await request(app)
     .post('/createAccount')
     .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        })
        expect(response.body).toHaveProperty('email')
    })
    it('should return a message that user alredy exist', async () =>{
       let userCreate = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        })
        userCreate = null
        const response = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        })
        expect(response.body).toHaveProperty('message')
    });
})
