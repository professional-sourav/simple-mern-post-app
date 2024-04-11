const fileUpload = require('express-fileupload');
const { getAllPosts, addNewPost, getPostById } = require('./controllers/PostController');
const { login, register } = require('./controllers/UserController');
const { CheckAuthToken, isCrudAllowedOnPost } = require('./middlewares/CheckAuth');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/posts', [CheckAuthToken, isCrudAllowedOnPost], getAllPosts);
router.post('/posts', [CheckAuthToken, isCrudAllowedOnPost], addNewPost);
router.get('/post/:id', getPostById);

router.post('/upload', fileUpload);

router.post('/user/login', login);
router.post('/user/register', register);

exports.router = router;
