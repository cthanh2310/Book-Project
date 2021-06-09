const express = require('express');
const {authMiddleware}= require('../middlewares/authMiddleware')

const postController = require('../controllers/postController.js');

const router = express.Router();

router.get('/', postController.getAllPosts);

router.post('/',authMiddleware, postController.createOnePost);

router.put('/:postId',authMiddleware, postController.updateOnePost);

router.delete('/:postId',authMiddleware, postController.deleteOnePost);

module.exports = router;