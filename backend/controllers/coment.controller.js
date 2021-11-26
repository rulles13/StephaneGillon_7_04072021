//const { coment, user } = require('../models');

const { coment } = require("../models");
const db = require("../models");
const Coment = db.coment;
const Article = db.article;
const User = db.user;
const Op = db.Sequelize.Op;

Coment.belongsTo(Article, {onDelete:'CASCADE'});
Coment.belongsTo(User, {onDelete:'CASCADE'});

// Create a coment.
exports.create = (req, res, next) => {
console.log(req.body)
  const coment = {
    userId: req.body.userId,
    textComent: req.body.textComent,
    articleId: req.body.articleId
  }
  
  Coment.create(coment)
    .then(() => res.status(201).json({ message: 'Commentaires créé !' }))
    .catch(error => res.status(400).json({ error }));
}, 

// find a coment or more

exports.findAll = (req, res, next) => {
  Coment.findAll({where: {articleId: req.params.id} })
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(400).json({ error }));
}

exports.delete = (req, res) => {
  coment.destroy({where: {id: req.params.id}})
    .then(() => res.status(200).json({ message: 'commentaire supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}

