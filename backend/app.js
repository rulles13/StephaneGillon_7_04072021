const express = require('express');
const app = express();

const userRoutes = require('./routes/user.route');
//const articleRoutes = require('./routes/article.route');

app.use('/user', userRoutes);
//app.use('/article', articleRoutes);

module.exports = app;