const request = require("supertest")
const app = require('../../src/app')
const truncate = require("../utils/truncate")
const authMiddleware = require('../../src/app/middlewares/jsonWebToken')




describe('try testing tools of search for tool',  () =>{
        beforeEach( async () =>{
        await truncate()
    })
    it('shold return token not provide', async() =>{
          
            const responseSearch = await request(app)
            .get('/home')
            const excpected = {error:" no token provide"}
            
            expect(responseSearch.status).toBe(401)
            expect(responseSearch.body).toEqual(excpected)
    })  
})