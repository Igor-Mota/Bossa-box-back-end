module.exports ={
    renderTool(tool){
        return {
                name: tool.name,
                link: tool.link,
                description: tool.description,
                tags: tool.tags
        }
    }
}