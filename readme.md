# Api for the Bossa Box test

## Routs:
    http://localhost:3000  
    this is a route to get all the tools

    http://localhost:3000/findtool/{tag}
    This is the route to filter the tools by the tag passing the tag through the url

    http://localhost:3000/showTools/{id}
    esta rota retorna apenas uma ferramenta  passando o id pela url

    http://localhost:3000/addTool
    this route creates a tool passing a json through the request body

    http://localhost:3000/editing/{id}
    this route edits a tool by passing the id through the url and the new values through the requester body

    http://localhost:3000/delete/{id}
    esta rota deleta uma ferramenta passando o id pela url