const express = require('express');

const router = express.Router();
const PostModel = require('../models/post');
const UserModel = require('../models/user');

router.get('/home', async (req, res) => {

    res.render('index.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn,
        message: req.query.message,
        posts: await PostModel.find({}),
    });
})

router.get('/register', (req, res) => {
    if(!!req.session.user?.loggedIn)
    {
        return res.redirect('/pages/home')
    }
    res.render('register.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Register",
        loggedIn: !!req.session.user?.loggedIn,
        error: req.query.error,
})
})

router.get('/login', (req, res) => {
    if(!!req.session.user?.loggedIn)
    {
        return res.redirect('/pages/home')
    }
    res.render('login.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Login",
        loggedIn: !!req.session.user?.loggedIn,
        error: req.query.error,
    })
})

router.get('/profile', async (req, res) => {
    if(!req.session.user?.loggedIn)
    {
        return res.redirect('/pages/login?error=Please%20login%20to%20forum')
    } 

    const userData = await UserModel.findOne({ _id: req.session.user.id })

    res.render('profile.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Profile",
        profilePicture: userData.profilePicture,
        loggedIn: !!req.session.user?.loggedIn,
        username: userData.username,
        email: userData.email,
        birthDate: userData.birthDate,
        likes: userData.likes,
        dislikes: userData.dislikes,
        postsCount: userData.postsCount,
        commentsCount: userData.commentsCount
    })
})

router.get('/thread', (req, res) => {
    res.render('thread.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn:!!req.session.user?.loggedIn
    })
})

router.get('/new-post', (req, res) => {
    if(!req.session.user?.loggedIn)
    {
        return res.redirect('/pages/login?error=Please%20login%20to%20forum')
    } 

    res.render('newPost.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "New Post",
        loggedIn: !!req.session.user?.loggedIn,

    });
})
module.exports = router;