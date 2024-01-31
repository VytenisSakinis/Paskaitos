// const sum = require('./math-module').sum;
// const subtract = require('./math-module').subtract;


// console.log(sum(4, 5));
// console.log(subtract(6, 10));

// const http = require("http");

// const server = http.createServer((req, res) => {
//     if(req.url === "/"){
//         req.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//         res.write('This is my answer');
//         res.end()
//     }
//     if(req.url === "/check"){
//         req.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
//         res.write('This is my answer');
//         res.end()
//     }
// })

// server.listen(3000)
// console.log("Server is started on port 3000");

const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
let countOfVisitors = 0;
const toDo = [
    {author: 'Vytenis', todo: "1. Ištraukti Eimantą iš mokymosi įstaigos"}, 
    {author: 'Vytenis', todo: "2. Can't show nes contraversial"}, 
    {author: 'Vytenis', todo: "3. Become didelis youtuber'is"}
];

app.get('/', (req, res) =>
 {
    res.send("hello world")
 })
 app.get('/count', (req, res) =>
 {
    countOfVisitors++;
    res.send("Currently visited times :" + countOfVisitors)
 })
 app.get("/get-toDo", (req, res) => {
    res.send(JSON.stringify(toDo))
 })
app.listen(3000)