const express = require("express");
const sessions = require("express-session");
const cors = require("cors");
const fs = require("fs");
const data = require('./data.json');
const FileStore = require("session-file-store")(sessions)

const server = express();
console.log(data);
server.use(
	cors({
		origin: "http://127.0.0.1:5500",
		credentials: true,
	})
);
server.use(express.json());
server.use(
	sessions({
		store: new FileStore({
			path: "./sessions",
			retries: 3,
			ttl: 3600,
		}),
		secret: "Banana bike",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false, expires: 3600000 },
	})
);

async function writeFile(obj)
{
	await fs.writeFile('./data.json', JSON.stringify(data), (err) => {
		if(err) 
		{
            console.error(err);
        }
	})
}

server.post("/user/register", async (req, res) => {
	// console.log(req.body);
	try {
		const username = req.body.username;
		const email = req.body.email;
		const password = req.body.password;
		data.users.push({
			id: data.userId,
			username: username,
			email: email,
			password: password,
		});
		data.userId++;
		await writeFile(data)
		req.session.loggedIn = true;
		req.session.username = username;
		req.session.userId = data.users[data.users.length - 1].id;
		if(username === "Grietininis")
			req.session.admin = true;
		else req.session.admin = false;
		res.send("Registracija yra sėkminga");
	} catch (err) {
		res.send("Netinkami duomenys");
	}
});

server.get("/users", (req, res) => {
	res.send(data.users);
});

server.get("/users/:id", (req, res) => {
	//Jei yra gaunami duomenys, juos reikėtų validuoti.
	console.log(isNaN(+req.params.id));
	if (isNaN(+req.params.id)) {
		res.send("ID privalo buti skaicius");
	}

	const selectedUser = data.users.find((user) => user.id === +req.params.id);
	if (!selectedUser) {
		res.send("Tokio vartotojo nėra"); //404, 500 Internal server error
	} else {
		res.send(selectedUser);
	}
});

server.post("/user/login", (req, res) => {
	//1. Validuojame, ar req.body turi tokius laukus username, password
	const username = req.body.username, //John
		password = req.body.password; // ledinukas -> a65f41as65f1as65f1as6f1as6f51as6f15as6f51a6sf1

	if (!username)
		return res
			.status(400)
			.json({ message: "Prašome teisingai įvesti vartotojo vardą" });
	if (!password)
		return res.status(400).json({ message: "Prašome įvesti slaptažodį" });
	//2. Patikrinti, ar vartotojas su tokiu username egzistuoja,
	const selectedUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	); //undefined - jei nerandamas
	//a. jei ne, tada siusti "Vartotojas neegzistuoja"
	if (!selectedUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	//b. toliau daromas tikrinimas
	//3. Ar slaptazodis atitinka.
	//Jei atitinka - tada siunciame atsakyma is serverio.
	//"Sekmingai prisijungete prie sistemos"
	if (selectedUser.password === password)
		// res.send("Sekmingai prisijungete prie sistemos");
		req.session.loggedIn = true;
		req.session.username = selectedUser.username;
		req.session.userId = selectedUser.id;
		res.status(200).json({ url: "http://localhost/todos.html" });
});
// Session check
server.get("/user/session-check", (req, res) => {
	if(req.session.loggedIn)
		return res.status(200).json({ message: "Valid session" , sessionValid: true})
	else
		return res.status(400).json({ message: "Invalid session", sessionValid: false})
})

// CRUD operacijas TODOs'ams;

server.post("/todos", (req, res) => {
	// Naujo todo pridejimas

	const { todo, done } = req.body;
	const username = req.session.username;
	if (!username)
		return res.status(400).json({ message: "Esate neprisijungęs" });
	if (!todo) return res.status(400).json({ message: "Blogai ivestas todo" });

	//validacija
	const selectedUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);

	const newTodo = { id: data.todoId, username, todo, done: !!done };
	console.log(newTodo);
	data.todos.push(newTodo);
	data.todoId++;
	writeFile(data)
	res
		.status(201)
		.json({ message: "Naujas todo buvo sėkmingai pridėtas", newTodo });
});

server.get("/todos", (req, res) => {
	res.status(200).json(data.todos);
});

server.get("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodo = data.todos.find((todo) => todo.id === id);
	if (!existingTodo) res.status(404).json({ message: "Įrašas buvo nerastas" });
	//404 - irasas nerastas
	else res.status(200).json(existingTodo); //200 - sėkmingas atsakymas
});

server.put("/todos/:id", (req, res) => {
	//Todo atnaujinimas
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const { username, todo, done } = req.body;
	console.log(username, todo);
	const existingUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	);
	if (!existingUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	const existingTodo = data.todos.findIndex((currentTodo) => currentTodo.id === id);

	data.todos[existingTodo] = {
		...data.todos[existingTodo],
		todo: todo || data.todos[existingTodo].todo,
		username,
		done,
	};
	writeFile(data)
	if (!existingTodo)
		res.status(404).json({ message: "Todo irašas buvo nerastas" });
	else res.status(201).json(data.todos[existingTodo]);
});

server.delete("/todos/:id", (req, res) => {
	const id = +req.params.id;
	if (isNaN(id))
		return res.status(400).json({ message: "Įveskite tinkamą id" });
	const existingTodoIndex = data.todos.findIndex(
		(currentTodo) => currentTodo.id === id
	);
	if (existingTodoIndex === -1) {
		return res.status(404).json({ message: "Šalinamas įrašas nerastas" });
	} else {
		data.todos.splice(existingTodoIndex, 1);
		writeFile(data);
		return res.status(204).json({ message: "Įrašas sėkmingai ištrintas" });
	}
});

server.listen(3000, () => {
	console.log("Aplikacija pasileido, jos adresas: http://localhost:3000/");
});