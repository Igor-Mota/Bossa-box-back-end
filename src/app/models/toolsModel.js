const knex = require("../../database/connection")

module.exports = {
    async showAllTools(){
        const response = await knex('tools').select('*').where()
        
        return response

    }   
}