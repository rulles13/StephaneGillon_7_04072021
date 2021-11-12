const { coment } = require('../models');

const db = require("../models");
const Coment = db.coment;
const Op = db.Sequelize.Op;

// Create a coment.
exports.create = (req, res, next) => {

  const coment = {
    writer: req.body.writer,
    text: req.body.text,
    articleId: req.body.articleId
  }
  
  Coment.create(coment)
    .then(() => res.status(201).json(coment))
    .catch(error => res.status(400).json({ error }));
}; 

// find a coment or more

exports.findAll = (req, res, next) => {
  Coment.findAll({where: {articleId: req.params.id} })
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
};

