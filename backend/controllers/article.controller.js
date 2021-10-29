const { article } = require('../models');

const db = require("../models");
const Article = db.article;
const Op = db.Sequelize.Op;

// Create an article with picture.
exports.create = (req, res, next) => {

  let attachment = null;
  attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  console.log(req.file.filename);

  const article = {
    text: req.body.text,
    image_link: attachment,
    writer: req.body.writer
  }
  console.log(article);
  Article.create(article)
    .then(() => res.status(201).json({ message: 'Article créé !' }))
    .catch(error => res.status(400).json({ error }));
};  

// Retrieve all Articles from the database.
exports.findAll = (req, res, next) => {
  Article.findAll()
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
};

// Retrieve an Article from the database.
exports.findOne = (req, res, next) => {
  Article.findOne({where: {id: req.body.id} })
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
};

/*
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