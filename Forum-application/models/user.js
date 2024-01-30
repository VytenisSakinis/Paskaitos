const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20
    },

    email: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 120
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    birthDate: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        required: true
    },
    postsCount: {
        type: Number,
        default: 0,
        required: true
    },
    commentsCount: {
        type: Number,
        default: 0,
        required: true
    },
    likes: {
        type: Number,
        default: 0,
    },
    dislikes: {
        type: Number,
        default: 0
    },
    admin: {
        type: Boolean,
        default: false,
        required: true
    }
})

const model = mongoose.model('User', userSchema)

module.exports = model;