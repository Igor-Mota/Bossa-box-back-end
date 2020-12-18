const knex = require("../../database/connection");
const toolsModel = require("../models/toolsModel")
const toolsView = require("../views/toolsView")
module.exports = {
   async index(req,res){
        const {user_id}  = req.headers;
   
        if(!user_id){
            return res.status(200).json({message:"not tools created"})
        }
        const response = await toolsModel.showAllTools(user_id)
        
        return res.json(response)
    },
    async create(req,res){
        const {user_id,name,link,description,tags} = req.body
        const response = await toolsModel.createTool({
           user_id,
           name,
           link,
           description,
           tags
       })
        res.status(201).json(response)
    },
    async searchForTag(req,res){
     
        const {tag, user_id} = req.body;

        const response = await toolsModel.findForTag(user_id);

        const tools =   response.map(element =>{

            if(element.tags.includes(tag)){

                return element.id
            }
            return
        })
        if(tools[0] !== undefined){

             const filteredTools = await toolsModel.findArrays(tools)
             
            return res.status(200).json(filteredTools)
        }
        return res.status(200).json({message:'not tool localized'})
    },       
       
    async delete(req,res){

        const {id} = req.params;
    
        const response =  await toolsModel.deleteTool(id)

        if(!response){ 
            res.status(204).json({message:"tool deleted"})
        }else{
            
            res.status(400).json(response)
            
        }
    },
    async put(req,res){
        const {id} = req.params;
        const {name,link,description,tags} = req.body
         await knex("tools").where({id}).update({
            name:name,
            link:link,
            description:description,
            tags: tags,
            updated_at: knex.fn.now()
        })
        const response = await knex('tools').select("*").where({id})
        res.status(200).json(toolsView.renderTool(response[0]))
    }
}
