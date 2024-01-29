const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const upload = require('../config/multer').upload;
const security = require('../utils/security');


router.post('/register', upload.single('img'), async (req, res) => {
    console.log(req.body);
    const { username, password, birthDate, email } = req.body
    const fileName = require('../config/multer').lastFileName

    if(!username || !email || !password || !birthDate) {
        return res.status(400).json({
            message: 'Please fill all fields'
        })
    }

    const salt = security.generateSalt();

    const hashedPassword = security.hashPassword(password, salt);

    const newUser = new UserModel({
        username, 
        email,
        password: hashedPassword,
        salt,
        birthDate, 
        profilePicture: `http://localhost:3000/public/images/${fileName}`
    });

    await newUser.save();
    res.status(200).json(newUser);
})

router.get('/users', async (req, res) => {
    const users = await UserModel.find({ username: "Petrelis" })

    res.status(200).json({message: 'Labas'}) 
})

module.exports = router;