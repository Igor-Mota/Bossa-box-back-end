const request = require("supertest")
const app = require('../../src/app')
const truncate = require("../utils/truncate")
const addToolsAndUser = require("../utils/addToolsAndUser")

describe('acess routes with permissions',  () =>{
        beforeEach( async () =>{
        await truncate()
    })
      it('shold veryfi if acess the route home it blocked if not have a token',async () =>{
        const response = await request(app)
        .get('/home')

        expect(response.status).toBe(401)
    });
     it('shold veryfi if acess the route home it garanted with send token',async () =>{
        const responseCreate = await request(app)
        .post('/createAccount')
        .send({
         	name:"twix",
	        password:"123456",
	        email:"twix@gmail.com"
            })
        const response = await request(app)
        .get('/home')
        .set('authorization','bearer '+responseCreate.body.token)
        
        
        expect(response.status).toBe(200)
    })
    it('shold veryfi acess denied with token mal formated',async () =>{
        const response = await request(app)
        .get('/home')
        .set('authorization','bearer '+'22343545435')
        
        
        expect(response.status).toBe(400)
    })
    it('shold veryfi acess denied with token mal formated without bearer',async () =>{
        const response = await request(app)
        .get('/home')
        .set('authorization','be','wugswsg8syg78qw7sgq7ws')
        expect(response.status).toBe(401)
    })
    it('should return a list with all tools of user',async () =>{
        const toolsAndUser = await addToolsAndUser.createTool(3)
        const user_id = toolsAndUser[1].user.id;
    
        const response = await request(app)
        .get('/home')
        .set('user_id', user_id)
        .set('authorization','bearer '+toolsAndUser[1].token)

        expect(response.status).toBe(200)
    })
})
