const express = require('express');

const postController = require('../controllers/postController.js');

const router = express.Router();

router.get('/', postController.getAllPosts);

router.post('/', postController.createOnePost);

router.put('/:postId', postController.updateOnePost);

router.delete('/:postId', postController.deleteOnePost);

module.exports = router;