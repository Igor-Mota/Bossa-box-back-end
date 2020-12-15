const express = require("express")
const cors = require("cors")
const routes = require("./routes")

require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.test":".env"
})

class AppController{
    constructor(){
        this.express = express()
        this.middlewares()
        this.routes()
    }
    cors(){
        this.express.use(cors())
    }
    middlewares(){
        this.express.use(express.json())
    }
    routes(){
        this.express.use(require("./routes"))
    }
    
}
module.exports = module.exports = new AppController().express;

