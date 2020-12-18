const request = require("supertest")
const app = require('../../src/app')
const truncate = require("../utils/truncate")
const addToolsAndUser = require("../utils/addToolsAndUser")
const jwt = require('jsonwebtoken')

describe('try testing tools of search for tool',  () =>{
        beforeEach( async () =>{
        await truncate()
    })
            it('should return a tool before send a tag or name', async() =>{
            const response = await addToolsAndUser.createTool()

            const tag = response[0][0].tags
            const user_id = response[1].user.id
            const token = jwt.sign({id:user_id},process.env.APP_SECRET,{
                expiresIn:172800
                })
       
            const responseSearch = await request(app)
            .post('/findtool')
            .set('authorization','bearer '+token)
            .send({
                tag:tag,
                user_id:user_id,
            })
           // console.log(responseSearch.body)
            expect(responseSearch.status).toBe(200)
    })
      it('should return a tool before send a tag or name', async() =>{
            const response = await addToolsAndUser.createTool()

            const user_id = response[1].user.id
            const token = jwt.sign({id:user_id},process.env.APP_SECRET,{
                expiresIn:172800
                })
       
            const responseSearch = await request(app)
            .post('/findtool')
            .set('authorization','bearer '+token)
            .send({
                tag:'shuashua',
                user_id:user_id,
            })
            expect(responseSearch.body).toHaveProperty('message')
    })
     it('shold return a response status 204', async() =>{
            const response = await addToolsAndUser.createTool()

            const id = response[0][0].id
            const token = jwt.sign({id:id},process.env.APP_SECRET,{
                expiresIn:172800
                })

            const responseSearch = await request(app)
            .delete(`/delete/${id}`)
            .set('authorization','bearer '+token)
         
            expect(responseSearch.status).toBe(204)
    }) 
     it('shold return a error case not delet tool', async() =>{
            const response = await addToolsAndUser.createTool()

            const id = response[1].user.id
            const token = jwt.sign({id:id},process.env.APP_SECRET,{
                expiresIn:172800
                })
            const responseSearch = await request(app)
            .delete(`/delete/9900`)
            .set('authorization','bearer '+token)
         
            expect(responseSearch.status).toBe(400)
    })
    it('shold return a tool editing', async() =>{
            const response = await addToolsAndUser.createTool()

            const tool = response[0][0];
            const id = response[1].id
            
            const token = jwt.sign({id:id},process.env.APP_SECRET,{
                expiresIn:172800
                })
            const responseSearch = await request(app)
            .put(`/editing/${tool.id}`)
            .set('authorization','bearer '+token)
            .send({
                name: 'teste',
                link: 'teste',
                description: 'teste',
                tags: 'teste'
            })
            const expected = {
                name: 'teste',
                link: 'teste',
                description: 'teste',
                tags: 'teste'
            }
            expect(responseSearch.body).toEqual(expected)
    })  
})