const knex = require("../../database/connection")

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    async create({email, password, name}){

    const response = await this.find({email})
    
    if(response){
        return {message: 'user already exist'}
    }
    const hash = await bcrypt.hash(password, 10);

    await knex('users').insert({email,name,password:hash})
    
    const newUser = await this.find({email})

    const token = await this.jwtCreate(newUser.id)
   
    return {user:newUser, token}
    },
    async find({email}){
     
        const response = await knex('users').select("*").where({email})
        const user = response[0];
 
        return user 

    },
    async authenticate({email,password}){
    
         const response = await this.find({email})
         
         if(response == undefined){
            return {message:"user  not found"}
        }
        const comparehash = await bcrypt.compare(password, response.password)
        
        if(!comparehash){
             
             return {message:"passwor wrong"}
         }
         const token = await this.jwtCreate(response.id)
         
         return {user:response, token}
        },
    async jwtCreate(user){
     
        const token = jwt.sign({id:user},process.env.APP_SECRET,{
        expiresIn:172800
        })
        return token
    }
}

