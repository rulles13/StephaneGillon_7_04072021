const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article.controller');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, articleCtrl.createArticle);
router.put('/:id', auth, multer, articleCtrl.modifyArticle);
router.delete('/:id', auth, articleCtrl.deleteArticle);
router.get('/', auth, articleCtrl.getAllArticles);
router.get('/:id', auth, articleCtrl.getOneArticle);
router.post('/:id/like', auth, articleCtrl.updateLike);


module.exports = router;