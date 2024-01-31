const express = require('express');
const router = express.Router();
const UserModel = require('../models/user');
const upload = require('../config/multer').upload;
const security = require('../utils/security');
const validate = require('../utils/validation')


router.post('/register', upload.single('img'), async (req, res) => {
    try {
    const { username, password, birthDate, email } = req.body
    const fileName = require('../config/multer').lastFileName

    if(!username || !email || !password || !birthDate) {
        return res.redirect('/pages/register?error=Fill all the fields');
    }

    // await UserModel.find({_id: id})
    // await UserModel.findOne({_id: id})


    const salt = security.generateSalt();

    const hashedPassword = security.hashPassword(password, salt);

    const newUserObj = 
        {
            username, 
            email,
            password: hashedPassword,
            salt,
            birthDate, 
            profilePicture: `/public/images/${fileName}`
           
        }

    const validationResults = validate(newUserObj)

    console.log(validationResults);

    if(validationResults !== "Success")
    {
        console.log("Whatever");
       return res.redirect("/pages/register?error="+ validationResults)
    }

    const newUser = new UserModel(newUserObj);

    await newUser.save();
    req.session.user = {
        id: newUser._id,
        loggedIn: true,
        admin: newUser.username === "Sigimonas",
    }
    res.redirect('/pages/home?message=registration was successful')
} catch (err) {
    console.log(err);
    res.redirect('/pages/register?error=Something%20went%20wrong%20check%20your%20information');
}
})

router.get('/users', async (req, res) => {
    if (!req.session.user.admin)
        return res.status(403).json({ message: "Neturite tam teisiu"})
    console.log(req.session.user);
    const users = await UserModel.find({})

    res.status(200).json(users) 
})

router.post('/login', async (req, res) => {
    const { loginName, password} = req.body;
    if (!loginName || !password) {
        return res.status(400).json({
            message: 'Please fill all fields'
        })
    }
    const existingUser = loginName.includes("@") ? await UserModel.findOne({ email: loginName}) : await UserModel.findOne({ username: loginName});
    if (!existingUser)
        return res.redirect("/pages/login")

    if (!security.isValidCredentials(password, existingUser.salt, existingUser.password))
        return res.redirect("/pages/login")


    req.session.user = {
        id: existingUser._id,
        loggedIn: true,
        admin: existingUser.admin,
    }
    res.redirect('/pages/home');
})

router.get('/logout', async (req, res) => {
    if (!req.session.user.loggedIn)
    {
       return res.redirect('/pages/home')
    }else{
        req.session.destroy((err) => {
           if(err){ 
            return res.redirect('/pages/home')
        }else{
            res.clearCookie('connect.sid')
            return res.redirect('/pages/home')
        }
        });
    }
})

module.exports = router;