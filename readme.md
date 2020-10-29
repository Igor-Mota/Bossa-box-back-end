# Api for the Bossa Box test

## About:
This api was developed in order to be sent to the back end test of the Bossa box


## Technologies and tools:
- Nodejs
- mysql
- express
- knex
- bcryptjs
- jsonwebtoken

## Routes:
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
    this route deletes a tool by passing the id through the url

    http://localhost:3000/login
    route to sign in

    http://localhost:3000/createAccount
    route to create account
