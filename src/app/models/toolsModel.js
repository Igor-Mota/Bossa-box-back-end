const knex = require("../../database/connection")

module.exports = {
    async showAllTools(user_id){
        const response = await knex('tools').select('*').where({user_id})
        if(response.length < 1){
            return {message: "no tools added"}
        }
        return response
    },
    async createTool({user_id,name,link,description,tags}){
        const response = await  knex('tools').insert([{user_id,name,link,description,tags}])
    
        const newTool = await this.findTools(response[0])
        return newTool
    },
    async findTools(id){
        if(id !== undefined){
            const response = await knex("tools").select("*").where({id:id})
            return response[0]
        }
            return
    },
    async findForTag(user_id){
        const response = await knex("tools").select("tags","id").where({user_id})
       
        return response
    },
     async findArrays(ids){
            const response = await knex("tools").select('*').where({id:ids})
            return response[0];
    },
    async deleteTool(id){
        const tool = await this.findTools(id)

        if(tool){
            const response = await knex("tools").where({id}).del()
            return response[0]
        }else{
            return {message: 'tool not found'}
        }
         
    }
}
