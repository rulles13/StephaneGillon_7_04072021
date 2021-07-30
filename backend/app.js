const express = require('express');
const app = express();

const userRoutes = require('./routes/user.route');
//const articleRoutes = require('./routes/article.route');

app.use('/api/user', userRoutes);
//app.use('/api/article', articleRoutes);

module.exports = app;