const { getPosts, createNewPost } = require("../models/Post");

const getAllPosts = async (req, res) => {

    const posts = await getPosts(req);

    res.json(posts);
};

const addNewPost = async (req, res) => {

    const result = await createNewPost(req);

    return res.status(201).json(result);
}

const getPostById = async (req, res) => {

    const post = await Post.findById(req.params.id);

    res.status(200).json(post);
}

const fileUpload = async (req, res) => {

    console.log(req.file);
}

module.exports = {
    getAllPosts,
    addNewPost,
    getPostById,
    fileUpload
}
