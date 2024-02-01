const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const pagesRouter = require('../routes/pages')
const userRouter = require('../routes/user-router')
const postsRouter = require('../routes/posts-router')
require("dotenv").config();
const bodyParser = require('body-parser')



function config(app) {
    app.set('view engine', 'ejs');
    const publicRouter = express.Router();
    publicRouter.use(express.static("public"));
    
    // middleware used to get JSON responses
    app.use(express.json());
    app.use(bodyParser.urlencoded())
    app.use(session({
        secret: process.env.SESSIONS_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: require('./db-connect').mongoUrl,
            collectionName: "sessions"
        }),
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }))
    app.use('/public', publicRouter);
    app.use('/tinymce', express.static('node_modules/tinymce'))
    app.use('/pages', pagesRouter);
    app.use('/api/user', userRouter)
    app.use('/api/post', postsRouter)
}

module.exports = { config }