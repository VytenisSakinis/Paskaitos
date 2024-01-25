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
    }
})

const model = mongoose.model('User', userSchema)

module.exports = model;