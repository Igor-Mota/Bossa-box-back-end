const knex = require("../../src/database/connection")

module.exports = async () =>{
   const elements =  await knex('users').select('*')
   elements.forEach(async  element => {
     await knex('users').del().where({id:element.id})
      }
   )}