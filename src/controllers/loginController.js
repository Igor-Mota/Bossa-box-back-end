const knex = require("../database/connection")
const jwt = require('jsonwebtoken');
const string = require("../secret/stringForGenerateHash.json")
const bcrypt = require("bcryptjs");


module.exports = {
   async login(req, res){
        const {name,password} = req.body;
        
        const response = await knex("users").select("id","name", "password").where({name});
            if(response.length  === 0){

                return res.json({message:"user  not found"})
            }
         const comparehash = await bcrypt.compare(password, response[0].password)
       
         if(!comparehash){
             
             return res.json({messa:"passwor wrong"})
         }
         const token = jwt.sign({id: response[0].id}, string.string,{
            expiresIn:172800
        })
        delete response[0].password
        
        const responseEnd = {user:response[0],token:token}
             
            res.json(responseEnd)
    },
    async createAccount(req,res){

        const {name, password} = req.body;

        const response = await knex("users").select("*").where({name})

        if( response.length > 0){

            res.status(400).json({message:"user already exiist"})
        }    
        var hash = await bcrypt.hash(password, 10);

        await  knex("users").insert({name, password:hash})

        let responseCreateUser = await knex("users").select("*").where({name})

        delete responseCreateUser[0].password

        const token = jwt.sign({id: responseCreateUser[0].id}, string.string,{
            expiresIn:172800
        })
        const endResponse = {
            user:responseCreateUser,
            token:token
        }
        res.status(200).json(endResponse)
    }
}