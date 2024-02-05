const express = require('express');

const router = express.Router();
const PostModel = require('../models/post');
const UserModel = require('../models/user');
const postModifications = require('../utils/postAuthor')

router.get('/home', async (req, res) => {


    const posts = await postModifications.getPostsWithAuthor()
    console.log(posts);
    res.render('index.ejs', {
        title: 'Forumo aplikacija',
        activeTab: "Home",
        loggedIn: !!req.session.user?.loggedIn,
        message: req.query.message,
        error: req.query.error,
        posts: posts,
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

router.get('/post/:id', async (req, res) => {
    try {
        const post = await PostModel.findOne({ _id: req.params.id})
        const user = await UserModel.findOne({ _id: "65c07b9716a89b2a501d5920" })

    res.render("thread.ejs", {
        title: 'Forumo aplikacija',
        activeTab: "",
        loggedIn: !!req.session.user?.loggedIn,
        post,
        user
    })
    }catch(err) {
        res.redirect('/pages/?error=Post not found')
    }
    
})
module.exports = router;