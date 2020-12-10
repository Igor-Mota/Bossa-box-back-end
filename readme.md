# Api for the Bossa Box test

## About:

This api was developed in order to be sent to the back end test of the Bossa box

Below we have the routes to access the tools in the database, to create edit or delete a tool and you must be logged in

I deployed the application to heroku

you can check it out at: https://fierce-dusk-07158.herokuapp.com/

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
    This route returns only one tool passing the id through the url

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
