const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 8,
        maxLength: 80,
        required: true
    },
    content: {
        type: String,
        minLength: 20,
        required: true
    },
    anonymousViewsCount: {
        type: Number,
        default: 0,
        required: true
    },
    viewsCount: {
        type: Number,
        default: 0,
        required: true
    },
    commentsCount: {
        type: Number,
        default: 0,
        required: true
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likesCount: {
        type: Number,
        default: 0,
        required: true
    },
    dislikesCount: {
        type: Number,
        default: 0,
        required: true
    },
    creationDate: {
        type: Number,
        default: new Date(),
        required: true
    },
    tags: {
        type: Array,
        default: [],
        required: true
    },
    images: {
        type: Array,
        default: [],
        required: true
    },


})

const Model = mongoose.model('Post', schema)

module.exports = Model;