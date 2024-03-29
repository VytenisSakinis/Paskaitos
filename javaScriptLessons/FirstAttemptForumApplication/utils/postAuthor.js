const PostModel = require("../models/post")
const UserModel = require("../models/user")

async function getPostsWithAuthor() {
const posts = await PostModel.find({})
const modifiedPosts = await Promise.all(posts.map(async(post) => {
    const userId = post.authorId;
    const user = await UserModel.findOne({_id: userId})
    const modifiedPost = post.toObject();
    modifiedPost.author = user.username
    return modifiedPost;
    
    })
);

    return modifiedPosts
}

module.exports = { getPostsWithAuthor }

