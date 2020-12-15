const routes = require("express").Router();

const authMiddleware = require("./app/middlewares/jsonWebToken")

const toolsController = require("./app/controllers/toolsController")
const loginController = require("./app/controllers/loginController")

routes.get("/home", toolsController.index)
routes.get("/showTool/:id", toolsController.show)
routes.delete("/delete/:id",authMiddleware, toolsController.delete)
routes.post("/addTool", authMiddleware, toolsController.create)
routes.get("/findtool/:tag", toolsController.searchForTag)
routes.put("/editing/:id", authMiddleware,toolsController.put)

routes.post("/login", loginController.login)
routes.post("/createAccount",loginController.createAccount)

module.exports = routes