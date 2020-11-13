const express = require('express');
const router = express.Router();
const comment_controller = require('../controllers/comment_controller');

// TODO create basic endpoints for comments
// route: '/comment/create'
router.post('/create', comment_controller.create_comment);
// route: '/comment/delete'
router.post('/delete', comment_controller.delete_comment);

module.exports = router;
