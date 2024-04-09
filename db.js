const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://souravthedevguy:D7ZcggKZVAwvUCXQ@cluster0.pqlmpjm.mongodb.net/blog')
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: String,
    isPublic: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'subscriber',
    },
    status: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true

});

module.exports = {
    Post: mongoose.model('posts', postSchema),
    User: mongoose.model('users', userSchema)
}
