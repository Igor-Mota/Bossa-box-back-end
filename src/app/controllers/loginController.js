const knex = require("../../database/connection")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const UserModel = require("../models/UserModel");

const reder = require("../views/userViews");
const { renderUser } = require("../views/userViews");

module.exports = {
   async login(req, res){
        //const {data} = req.body
        const {email, password} = req.body;
        
       const response = await UserModel.authenticate({email,password})  
       if(response.message){
        return res.status(200).json(response)
       }   
        
        return res.status(200).json(renderUser(response.user, response.token))
    
    },
    async createAccount(req,res){
     //   const {data} = req.body

        const {email,name, password} = req.body;
       
        const response = await UserModel.create({email,password, name})
        if(response.message){
            return res.status(401).json(response)
        }
        return res.status(200).json(renderUser(response.user,response.token))
    }
}