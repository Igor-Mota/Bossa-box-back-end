
const request = require("supertest")
const app = require('../../src/app')


const truncate = require('../utils/truncate')

describe('test for create and warnig if user exists or not', () =>{
  beforeEach( async () =>{
        await truncate()
    })
    it('should return user and email and token case user try login with correct credentials',async ()=>{   
        let UserResponse = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        }) 
        UserResponse = null;
        const response = await request(app)
        .post('/login')
        .send({
	        password:'123456',
	        email:"twix@gmail.com"
        })

        expect(response.body).toHaveProperty('email')
    })
    it('should  must inform that the user was not found ',async () =>{
        let UserResponse = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        }) 
        UserResponse = null
        const response = await request(app)
        .post('/login')
        .send({
	        password:'123456',
	        email:'twix@gmai.com.br'
        })
        expect(response.body).toHaveProperty('message')
    })
     it('should  must inform that the user was password wrong ',async () =>{
        let UserResponse = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        }) 
        UserResponse = null
        const response = await request(app)
        .post('/login')
        .send({
	        password:'1234567',
	        email:'twix@gmail.com'
        })
        expect(response.body).toHaveProperty('message')
    })
    it('should  return a jwt token case user create account with sucess ',async () =>{
        const response = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        }) 
        expect(response.body).toHaveProperty('token')
    })
    it('should  return a jwt token case user try login with correct credentials ',async () =>{
        let UserResponse = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
        }) 
        UserResponse = null
        const response = await request(app)
        .post('/login')
        .send({
	        password:'123456',
	        email:'twix@gmail.com'
        })
        expect(response.body).toHaveProperty('token')
    })
  
})
