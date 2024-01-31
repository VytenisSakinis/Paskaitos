const express = require('express');
const router = express.Router();
const PostModel = require('../models/post');
const upload = require('../config/multer').upload;
const validate = require('../utils/postValidation');

router.get('/home', async (req, res) => {//visu irasu gavimas
    const allPosts = await PostModel.find({})
    res.status(200).json(allPosts)
})

router.get('/:id', async (req, res) => {//vieno konkretaus iraso gavimas
    const post = await PostModel.findOne({ _id: req.params.id })
    if (!post) {
        return res.status(404).json({ message: 'Post not found' })
    }
    res.status(200).json(post)
})

router.post('/home', async (req, res) => {//naujo iraso sukurimas

})

router.put('/home', async (req, res) => {//iraso atnaujinimas
})

router.delete('/:id', async (req, res) => {//iraso istrinimas

    const post = await PostModel.findOne({ _id: req.params.id })
    if (!post) {
        return res.status(404).json({ message: 'Post not found' })
    }

    if(post.authorId !== req.session.user.id) {
        
    }

    if(post.authorId === req.session.user.id || req.session.user.admin) {
        await PostModel.findOneAndDelete({_id: req.params.id})
        return res.status(200).json({ message: 'Post deleted'})
    }
        return res.status(404).json({ message: "You're not authorized to delete this post" })
    
    
    
})

module.exports = router;