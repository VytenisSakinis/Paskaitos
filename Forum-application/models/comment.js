const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    postDate: {
        type: Date,
        default: Date.now(),
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likesCount: {
        type: Number,
        default: 0,
    },
    dislikesCount: {
        type: Number,
        default: 0,
    },
    content: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 4000
    }
});

const model = new mongoose.Model("comment", schema);

module.exports = model;