module.exports = {
    render(tool){
        return{
            id:tool.id,
            title:tool.title,
            link:tool.link,
            description:tool.descripttion,
            tags:tool.tags
        }
    }
}
