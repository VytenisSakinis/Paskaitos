const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Forumo aplikacija',
        username: "Vytenis",
        list: ['Product1', 'Product2', 'Milk', 'Chocolate']
    });
})

router.get('/register', (req, res) => {
    res.render('register.ejs', {})
})

module.exports = router;