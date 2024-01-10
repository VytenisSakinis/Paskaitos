const express = require("express")
const cors = require("cors")
const server = express()
server.use(cors())
server.use(express.json());
const users = [];
const todos = [];

server.get("/", (req, res) => {
    res.send("Sigis")
})

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
    try {
    
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
    }
    catch(err){
    res.send("Netinkami duomenys")
    }
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
    const username = req.body.username,
    password = req.body.password

    if(!username) return res.status(400).json({message: "Enter your username"})
    if(!password) return res.status(400).json({message:"Enter your password"})
    //2 patikrinti ar vartotojas su tokiu username egzistuoja, jeigu neegzistuoja
        const selectedUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase())
        if(!selectedUser) return res.status(404).json({message: "User doesn't exist"})
    //3 ar slaptazodis atitinka
    // jei atitinka tada siunciame atsakyma is serverio "sekmingai prisijungete prie sistemos"
    if(selectedUser.password === password) res.status(200).json({ url: "http://127.0.0.1:5500/2024-01-09/front-end/todos.html"})
    // res.send("User exists")
    
})

//CRUD operacijos TODOs'ams

server.post('/todos', (req, res) => {
    const {username, todo} = req.body
    //validacija
    if(!username) return res.status(400).json({message: "Wrong username"})
    if(!todo) return res.status(400).json({message: "Wrong todo"})

    const selectedUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase())
    if(!selectedUser) return res.status(404).json({message: "User is not found"})

    const newTodo = { id: todos.length + 1, username, todo }
    todos.push(newTodo)
    res.status(201).json({ message: "To-do has been created"})
})

server.get("/todos", (req, res) => {
    res.status(200).json(todos);
})

server.get("/todos:id", (req, res) => {

})

server.put('/todos/:id', (req, res) => {
    const id = +req.params.id
    if(isNaN(id)) res.status(400).json({ message: "Listing with this ID doesn't exist, enter a valid ID" });
    const {username, todo} = req.body;
    const existingUser = users.find((user) => user.username.toLowerCase() === username.toLowerCase())
    if(!existingUser) return res.status(404).json({ message: "User doesn't exist" })

    const existingTodo = todos.findIndex((currentTodo) => currentTodo.id === id)
    todos[existingTodo] = {... todos[existingTodo], todo, username}

})
server.listen(3000, () => {
    console.log("Aplikacija pasileido jos adresas: http://localhost:3000/");
});

