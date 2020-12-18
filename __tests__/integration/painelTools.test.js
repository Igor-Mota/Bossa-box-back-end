const request = require("supertest")
const app = require('../../src/app')

const truncate = require('../utils/truncate')
const addToolsAndUser = require('../utils/addToolsAndUser')
describe('testing of filter tool show tools find tools', () =>{
    beforeEach( async () =>{
        await truncate()
    })
    it('should return a new tool created',async ()=>{   
     
        const user = await addToolsAndUser.createUser()

        const response = await request(app)
        .post('/addTool')
        .send({
            user_id:user.id,
            name:'twix',
            link:'http://teste',
            description:'bem louco empolgante',
            tags:'arrocha'
        })
        expect(response.body).toHaveProperty('user_id')
    })
})
