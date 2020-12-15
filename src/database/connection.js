const knexfile = require("../../knexfile")

const knex = () =>{
    if(process.env.NODE_ENV === "test"){
        return(
           require("knex")(knexfile.test)
        )
    }else{
        return(
             require("knex")(knexfile.development)
            
        )
    }
}


module.exports = knex();