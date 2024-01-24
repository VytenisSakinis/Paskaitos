const express = require('express')
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://server:X6WyTJ6OcKi36Wfh@cluster0.wackbpo.mongodb.net/forumhub')
const db = mongoose.connection;

// DB listeners, providing information wether we've connected or not
db.on('error', (error) => {
    console.error('Could not connect to database:' + error);
})

db.once('open', () => {
    console.info('Connected to database')
}
)
app.set('view engine', 'ejs');
const publicRouter = express.Router();
publicRouter.use(express.static("public"));
app.use('/public', publicRouter);


app.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Forumo aplikacija',
        username: "Vytenis",
        list: ['Product1', 'Product2', 'Milk', 'Chocolate']
    });
})

app.get('/register', (req, res) => {
    res.render('register.ejs', {})
})

app.listen(3000, () => {
    console.log("Server has started");
})