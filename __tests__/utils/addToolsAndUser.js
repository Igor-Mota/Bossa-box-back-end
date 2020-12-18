const faker = require('faker')

const userModel = require('../../src/app/models/UserModel')
const toolsModel = require('../../src/app/models/toolsModel')

module.exports = {
   async createTool(total = 1){
        const newUser = await userModel.create({
            name: faker.name.findName(),
	        password:faker.internet.password(),
            email: faker.internet.email()
        })
        let tools = []
        for(var i = 0; i < total; i++){
            const newTool = await toolsModel.createTool({
                user_id:newUser.user.id,
                name:faker.name.findName(),
                link: faker.internet.url(),
                description:faker.lorem.sentence(),
                tags:faker.lorem.word(),
        })
        tools.push(newTool)
    }
        return [tools, newUser];
    },
    async createUser(){
        const newUser = await userModel.create({
            name:faker.name.findName(),
	        password:faker.internet.password(),
            email:faker.internet.email()
        })
        return newUser.user
    }
}
