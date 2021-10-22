const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require('./routes/user.route');
const articleRoutes = require('./routes/article.route');
const app = express();

var corsOptions = {
  origin: ["http://localhost:8080","http://192.168.1.57:8080"]

};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync(); // db ok 
//db.sequelize.sync({ force: true }).then(() => { /*RAZ db*/
//     console.log('Drop and re-sync db.');
//});

// simple route

app.use('/user', userRoutes); 
app.use('/article', articleRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});