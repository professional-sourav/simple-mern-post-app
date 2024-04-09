const { Post } = require("../db")

const getPosts = async (req) => {
    
    const posts = await Post.find({
        user: req.user.id
    });

    return posts;
}

const createNewPost = async (req) => {

    const post = await Post.create({
        ...req.body,
        user: req.user.id
    });

    return post;
}

module.exports = {
    getPosts,
    createNewPost
}
