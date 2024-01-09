const express = require("express")
const cors = require("cors")
const server = express()
server.use(cors())
server.use(express.json);
const users = [];

server.get("/user/:id", (req, res) => {
    console.log('Method: ' + req.method);
    console.log('URL ' + req.originalUrl);
    console.log('Body ' + req.body);
    console.log('Parameters ' + req.params.id);
    console.log("Query " + JSON.stringify(req.query));
    console.log("Buvo kreiptasi i serveri");
    res.send("Labas pasauli!")
})

server.post("/register", (req,res) => {
    console.log(req.body);
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    res.send("Atsakymas is serverio")

})

server.listen(3000, () => {
    console.log("Aplikacija pasileido jos adresas: http://localhost:3000/");
});

