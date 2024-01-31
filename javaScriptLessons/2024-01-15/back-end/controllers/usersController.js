const express = require('express');
const data = require('../data.json')
const router = express.Router();
const { writeFile } = require('../utils/fileOperations');

router.post("/register", async (req, res) => {
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
        console.log(err);
		res.send("Netinkami duomenys");
	}
});

router.get("/", (req, res) => {
	res.send(data.users);
});

router.get("/:id", (req, res) => {

	if (isNaN(+req.params.id)) {
		res.send("ID privalo buti skaicius");
	}

	const selectedUser = data.users.find((user) => user.id === +req.params.id);
	if (!selectedUser) {
		res.send("Tokio vartotojo nėra"); 
	} else {
		res.send(selectedUser);
	}
});

router.post("/login", (req, res) => {
	const username = req.body.username, 
		password = req.body.password; 

	if (!username)
		return res
			.status(400)
			.json({ message: "Prašome teisingai įvesti vartotojo vardą" });
	if (!password)
		return res.status(400).json({ message: "Prašome įvesti slaptažodį" });
	const selectedUser = data.users.find(
		(user) => user.username.toLowerCase() === username.toLowerCase()
	); 
	if (!selectedUser)
		return res.status(404).json({ message: "Toks vartotojas neegzistuoja" });

	if (selectedUser.password === password)
		req.session.loggedIn = true;
		req.session.username = selectedUser.username;
		req.session.userId = selectedUser.id;
		res.status(200).json({ url: "http://localhost/todos.html" });
});

router.get("/session-check", (req, res) => {
	if(req.session.loggedIn)
		return res.status(200).json({ message: "Valid session" , sessionValid: true})
	else
		return res.status(400).json({ message: "Invalid session", sessionValid: false})
})


module.exports = router;
