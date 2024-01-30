const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {

    res.render('index.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn
    });
})

router.get('/register', (req, res) => {
    res.render('register.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn
})
})

router.get('/login', (req, res) => {
    res.render('login.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn
    })
})

router.get('/profile', (req, res) => {
    res.render('profile.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn
    })
})

router.get('/thread', (req, res) => {
    res.render('thread.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn:!!req.session.user?.loggedIn
    })
})
module.exports = router;