const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { user } = require('../models');

const db = require("../models");
const User = db.user;
const Article = db.article;
const Coment = db.coment;
const Op = db.Sequelize.Op;

User.hasMany(Article);
Article.belongsTo(User);

exports.signup = (req, res, next) => {
  
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        pseudo: req.body.pseudo,
        email: req.body.email,
        password: hash
      }
      User.create(user)
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  //console.log("test export login");
  User.findOne({where: {email: req.body.email} })
    .then((user) => {
      bcrypt.compare(req.body.password, user.dataValues.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          userId: user.dataValues.id,
          userRole: user.dataValues.role,
          token: jwt.sign(
            { userId: user.dataValues.id, role: user.dataValues.role }, 
            process.env.SECRET_PASS,
            { expiresIn: '24h' }
          )
        });
      })
      .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(555).json({ error }));
      

};

exports.delete = (req, res) => {
  User.destroy({where: {id: req.params.id}})
  .then(() => res.status(201).json({ message: 'Utilisateur supprimé !' }))
  .catch(error => res.status(400).json({ error }));
};