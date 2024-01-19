const express = require("express");
const sessions = require("express-session");
const cors = require("cors");

const server = express();

const user = []
const existingUsers = [{ userID: 1 },
    { userID: 2 }, 
    { userID: 3 },
    { userID: 4 },
    { userID: 5 }]

const users = [ 
    { userID: 1, name: "Sigis", age: 35}, 
    { userID: 2, name: "Vasia", age: 35 }, 
    { userID: 3, name: "Vadim Garažnikov", age: 35 }
]

const products = [
    { productName: "Meshkaphon", productPrice: 1000 },
    { productName: "Meshkaphon", productPrice: 222 },
    { productName: "Meshkaphon", productPrice: 111 },
    { productName: "Atviorka", productPrice: 555 },
    { productName: "Atviorka", productPrice: 888 },
    { productName: "Atviorka", productPrice: 999 },
    { productName: "Suktukas", productPrice: 1223 },
    { productName: "Suktukas", productPrice: 34313 },
    { productName: "Suktukas", productPrice: 4321421 },
    { productName: "Gaming Computer 30000", productPrice: 433 },
    { productName: "Gaming Computer 30000", productPrice: 1 },
    { productName: "Gaming Computer 30000", productPrice: 24 }

]

server.use(
	cors({
		origin: "http://127.0.0.1:5500",
		credentials: true,
	})
);
server.use(express.json());
server.use(
	sessions({
		secret: "Banana bike",
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

server.get("/addition/:num1/:num2", (req, res) => {
    const num1 = +req.params.num1;
    const num2 = +req.params.num2;

    if(isNaN(num1) || isNaN(num2)) {res.status(400).json( { message: "Invalid input. Please provide numbers."} );
    }else{const result = num1 + num2;
        res.json( { result } );
}
});

server.get("/check-if-user-exists/:userid", (req, res) => {
    const userid = +req.params.userid;
    console.log(userid);
    const userExists = existingUsers.find(user => user.userID === userid)
    if (userExists) {res.status(200).json( { message: "User exists"} )
    }else{
    res.status(400).json( { message: "user doesnt exist"})
}
})



server.get("/multiply/:num1/:num2", (req, res) => {
    const num1 = req.params.num1
    const num2 = req.params.num2
    
    if(isNaN(num1) || isNaN(num2)){ res.status(400).json({ message: "Enter a valid number" })
}else{ 
    const multiply = num1 * num2
    res.status(200).json({ multiply })}

})

server.post("/register-new-user/", (req, res) => {
    const username = req.body.username
    const password = req.body.password
    if(!username || !password){ return res.status(400).json({ message: "Enter username and/or password"})
    }else{ user.push({
        username: username,
        password: password
    })
    }
    res.status(200).json({ message: "User added successfully" })
})

server.get("/reverse-string/:text", (req, res) => {
    const text = req.params.text
    if(!isNaN(text)) res.status(400).json( { message: "Enter a word, not a number"})
    const reverse = text.split("").reverse().join("")
    res.status(200).json( reverse)
})

server.get("/fetch/:id", (req, res) => {
    const id = req.params.id;
    const foundUser = users.filter(user => user.userID === +id)
    if(foundUser.length > 0) {
        res.status(200).json( foundUser )
    }else{
        res.status(400).json({ message: "User not found"})
    }
})

server.get("/products", (req, res) => {
    const name = req.query.name
    const priceLessThan = +req.query.priceLess

    let filteredProducts = [... products]

    if(name && !priceLessThan)
    filteredProducts = filteredProducts.filter(product => product.productName === name)
    if(!name && priceLessThan){
        if(isNaN(priceLessThan)) res.status(400).json( { message: "Price must be a number" } )
        filteredProducts = filteredProducts.filter(product => product.productPrice <= priceLessThan)
    }
    if(name && priceLessThan)
    {
        if(isNaN(priceLessThan)) res.status(400).json( { message: "Price must be a number" } )
        filteredProducts = filteredProducts.filter(product => product.productPrice <= priceLessThan)
        filteredProducts = filteredProducts.filter(product => product.productName === name)
    }

    if(filteredProducts.length > 0) {
        res.status(200).json( filteredProducts )
    }else{
        res.status(404).json( { message: "Item doesn't exist" })
    }
})

server.listen(3000, () => {
    console.log("serveris pasileido");
} )