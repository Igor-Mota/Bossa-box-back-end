const routes = require("express").Router();

const authMiddleware = require("./app/middlewares/jsonWebToken")

const toolsController = require("./app/controllers/toolsController")
const loginController = require("./app/controllers/loginController")


routes.get("/home", authMiddleware,toolsController.index)

routes.post("/findtool",authMiddleware, toolsController.searchForTag)
routes.delete("/delete/:id", authMiddleware,toolsController.delete)

routes.post("/addTool", toolsController.create)



routes.put("/editing/:id", toolsController.put)

routes.post("/login", loginController.login)
routes.post("/createAccount",loginController.createAccount)

module.exports = routes