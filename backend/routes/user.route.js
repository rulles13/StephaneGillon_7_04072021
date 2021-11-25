const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/:id', userCtrl.delete);

module.exports = router;

const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op; 