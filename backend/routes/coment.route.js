const express = require('express');
const router = express.Router();

const comentCtrl = require('../controllers/coment.controller');
const auth = require('../middleware/auth');

router.post('/create', auth, comentCtrl.create);
router.get('/:id',comentCtrl.findAll);

/*router.get('/findAll',comentCtrl.findAll);
router.delete('/:id',comentCtrl.delete);*/

module.exports = router;

const db = require("../models");
const Coment = db.coments;
const Op = db.Sequelize.Op;
