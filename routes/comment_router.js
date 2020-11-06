const express = require('express');
const router = express.Router();
const comment_controller = require('../controllers/comment_controller');

// TODO create basic endpoints for comments
// route: '/post/create'
router.post('/create', comment_controller.create_comment);
// route: '/post/delete'
router.delete('/delete', comment_controller.delete_comment);

module.exports = router;
