const routes = require("express").Router();

const toolsController = require("./controllers/toolsController")
const loginController = require("./controllers/loginController")

routes.get("/", toolsController.index)
routes.get("/showTool/:id", toolsController.show)
routes.delete("/delete/:id", toolsController.delete)
routes.post("/addTool", toolsController.create)
routes.get("/findtool/:tag", toolsController.searchForTag)
routes.put("/editing/:id", toolsController.put)

routes.post("/login", loginController.login)
routes.post("/createAccount",loginController.createAccount)

module.exports = routes