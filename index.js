const express = require('express');
const { router } = require('./routes');
require('dotenv').config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
