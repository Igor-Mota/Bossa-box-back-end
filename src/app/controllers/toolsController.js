const knex = require("../../database/connection");

module.exports = {
   async index(req,res){
       const response = await knex("tools").select("*")
        res.json(response)
    },
    async create(req,res){
        const {title,link,description,tags} = req.body

        const tagLowcase = tags.toLowerCase()
        
        const result = await  knex("tools").insert([{title, link, description, tags: tagLowcase}])

        const response = await knex("tools").select("*").where({id:result})

        res.status(201).json(response)
    },
    async show(req, res){
        const {id} = req.params
        try{
            const response =  await knex("tools").select("*").where({id}).first()
            
            res.json(response);
        
        }catch(e){
            res.json({message: e + ",tool not found"})
        }   
    },
    async searchForTag(req,res){
        const {tag} = req.params
        const {onlytag} = req.headers
        
        try{
            const response = await knex("tools").select("tags","id","title")
           
            let tools = []
           
            response.forEach(element =>{
                if(element.tags.includes(tag)){
                    let id = element.id
                    tools.push(id)
                
                }else if(element.title.includes(tag) && onlytag !== "true"){
                    let id = element.id 
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
          res.status(204).json({message:"tool deleted"})
        }catch(e){
            res.json({error:e})
        }
    },
    async put(req,res){
        const {id} = req.params;
        const {title,link,description,tags} = req.body
         await knex("tools").where({id}).update({
            title:title,
            link:link,
            description:description,
            tags: tags,
            updated_at: knex.fn.now()
        })
        const response = await knex('tools').select("*").where({id})
        res.status(200).json(response)
    }
}
