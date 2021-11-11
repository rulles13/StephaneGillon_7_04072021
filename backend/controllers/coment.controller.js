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

