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
    users.push({
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
    })
    res.send("Atsakymas is serverio")
})

server.get("/users", (req, res) => {
    res.send(users)
})

server.get("/users/:id", (req, res) => {

    if(isNaN(+req.params.id)) {
        res.send("ID privalo buti skaicius")
    }

    const selectedUser = users.find((user) => user.id === +req.params.id)
    if(!selectedUser)
        res.send('Tokio vartotojo nėra')
    else
        res.send(selectedUser)
})

server.post('/login', (req, res) => {
    //1 validuojame ar turi req.body loginName password
    //2 patikrinti ar vartotojas su tokiu username egzistuoja, jeigu neegzistuoja
        //a jei ne tada siusti atsakyma "vartotojas neegzistuoja"
        //b toliau daromas tikrinimas
    //3 ar slaptazodis atitinka
    // jei atitinka tada siunciame atsakyma is serverio "sekmingai prisijungete prie sistemos"
})

server.listen(3000, () => {
    console.log("Aplikacija pasileido jos adresas: http://localhost:3000/");
});

