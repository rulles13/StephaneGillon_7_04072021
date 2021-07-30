const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { user } = require('../models');

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.signup = (req, res, next) => {
  
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = {
        email: req.body.email,
        password: hash,
      }
      User.create(user)
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  console.log("test export login");
  User.findOne({
    where: {
      email: req.body.email,
    }
  })
  .then(user => {
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    console.log(user);
    bcrypt.compare(req.body.password, user.datavalues.password)
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          userId: user.datavalues.id,
          token: jwt.sign(
            { userId: user.datavalues.id }, 
            process.env.SECRET_PASS,
            { expiresIn: '24h' }
          )
        });
      })
      .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

