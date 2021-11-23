//const { coment, user } = require('../models');

const db = require("../models");
const Coment = db.coment;
const Article = db.article;
const User = db.user;
const Op = db.Sequelize.Op;

Article.hasMany(Coment);
Coment.belongsTo(Article);
Coment.belongsTo(User);

// Create a coment.
exports.create = (req, res, next) => {

  const coment = {
    userId: req.body.userId,
    textComent: req.body.textComent,
    articleId: req.body.articleId
  }
  
  Coment.create(coment)
    .then(() => res.status(201).json({ message: 'Comentaires créé !' }))
    .catch(error => res.status(400).json({ error }));
}, 

// find a coment or more

exports.findAll = (req, res, next) => {
  Coment.findAll({where: {articleId: req.params.id} })
    .then(articles => res.status(201).json(articles))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteLot = (req, res, next) => {
  Coment.deleteLot({where: {articleId: req.params.id} })
  .then(articles => res.status(201).json(articles))
  .catch(error => res.status(400).json({ error }));
}

