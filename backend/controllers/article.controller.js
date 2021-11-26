//const { article } = require('../models');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const db = require("../models");
const Article = db.article;
const User = db.user;
const Op = db.Sequelize.Op;

Article.belongsTo(User, {onDelete:'CASCADE'});

// Create an article with picture.
exports.create = (req, res, next) => {

  let attachment = null;
  attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  console.log(req.file.filename);

  const article = {
    titre: req.body.titre,
    text: req.body.text,
    image_link: attachment,
    userId: req.body.userId,
  }
  
  console.log(article);
  Article.create(article)
    .then(() => res.status(201).json({ message: 'Article créé !' }))
    .catch(error => res.status(400).json({ error }));
};  

// Retrieve all Articles from the database.
exports.findAll = (req, res, next) => {
  Article.findAll(
    {
      order: [['createdAt','DESC']],
      include:
        {
        model: User,
        attributes: ['first_name','last_name','Id']
        },
    },
    
  )
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
};

// Retrieve an Article from the database.
exports.findOne = (req, res, next) => {
  Article.findOne({where: {id: req.params.id} })
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
};

// Remove an Article from the database.
exports.delete = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.SECRET_PASS);    
  const userIdToken = decodedToken.userId;
  const roleToken = decodedToken.role;

  Article.findOne({where: {id: req.params.id} })
    .then(article => {
      if (article.userId === userIdToken || roleToken == "admin") {
        const filename = article.image_link.split('/images/')[1];
        console.log(filename);
        fs.unlink(`images/${filename}`, () => {
          Article.destroy({where: {id: req.params.id} })
            .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
            .catch(error => res.status(400).json({ error }));
          });
      }
      else {
        res.status(400).json({ error })
      }
      
    })
    .catch(error => res.status(400).json({ error }));
};
/*  Article.destroy({where: {id: req.params.id} })
  
  .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
  .catch(error => res.status(400).json({ error }));



// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
}; */