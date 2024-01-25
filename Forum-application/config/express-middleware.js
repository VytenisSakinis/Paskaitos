const express = require('express')
const pagesRouter = require('../routes/pages')
const userRouter = require('../routes/user-router')
function config(app) {
    app.set('view engine', 'ejs');
    const publicRouter = express.Router();
    publicRouter.use(express.static("public"));
    // middleware used to get JSON responses
    app.use(express.json());
    app.use('/public', publicRouter);
    app.use('/pages', pagesRouter);
    app.use('/api/user', userRouter)
}

module.exports = { config }