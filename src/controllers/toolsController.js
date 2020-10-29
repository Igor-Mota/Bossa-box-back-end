const knex = require("../database/connection");
const toolsView = require("../views/toolsView")

module.exports = {
   async index(req,res){
       const response = await knex("tools").select("*")
            res.json(response)
    },
    async create(req,res){
        const {title,link,descripttion,tags} = req.body
        
        const result = await  knex("tools").insert([{title, link, descripttion, tags}])

        const response = await knex("tools").select("*").where({id:result})

        res.status(201).json(response)
    },
    async show(req, res){
        const {id} = req.params
        try{
            const response =  await knex("tools").select("*").where({id}).first()
            res.json(toolsView.render(response));
        
        }catch(e){
            res.json({message: e + ",tool not found"})
        }   
    },
    async searchForTag(req,res){
        const {tag} = req.params     
      
        try{
            const response = await knex("tools").select("tags","id")
           
            let tools = []
           
            response.forEach(element =>{
                if(element.tags.includes(tag)){
                    const id = element.id
                    tools.push(id)
                }
            })
            const queryForIds  = await knex("tools").select("*").whereIn("id",tools) 

            res.json(queryForIds)
       
        }catch(e){
            
            return res.json({error: e})
        }    
    },
    async delete(req,res){
        const {id} = req.params;
        try{
          const response = await knex("tools").where({id}).del()
          res.status(204).json({message:"tool delted"})
        }catch(e){
            res.json({error:e})
        }
    },
    async put(req,res){
        const {id} = req.params;
        const {title,link,descripttion,tags} = req.body
         await knex("tools").where({id}).update({
            title:title,
            link:link,
            descripttion:descripttion,
            tags: tags,
            updated_at: knex.fn.now()
        })
        const response = await knex('tools').select("*").where({id})
        res.status(200).json(response)
    }
}