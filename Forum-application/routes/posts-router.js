const express = require('express');
const router = express.Router();
const PostModel = require('../models/post');
const upload = require('../config/multer').upload;
const validate = require('../utils/postValidation');

router.get('/', async (req, res) => {//visu irasu gavimas
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

router.post('/', async (req, res) => {//naujo iraso sukurimas
    const validationResults = validate(req.body)
    if(validationResults!== "Success")
    {
        return res.status(404).json({
            message: "Bad information"
        })
    }

    const newPost = 
    {
        title,
        content,
        authorId: req.session.user.userId,
    }
    
    const post = new PostModel(newPost)

    await post.save()
    res.status(200).json(post)
})

router.put('/:id', async (req, res) => {//iraso atnaujinimas
    const post = await PostModel.findOne({ _id: req.params.id })
    if (!post)
     return res.status(404).json({ message: "Post not found"})

    if (req.body.content)
    post.content = req.body.content

    if (req.body.title)
    post.title = req.body.title

    await post.save()
    res.status(200).json(post)
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