const express = require("express");
const usersController = require("./controllers/usersController");
const todosController = require("./controllers/todosController");
const initialize = require('./middlewares/init')

const server = express();
initialize(server)

//MVC - MODEL, VIEW, CONTROLLER struktura

server.use('/users/', usersController)
server.use('/todos/', todosController)

server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});