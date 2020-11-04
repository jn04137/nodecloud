const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/post_controller');

// route: 'post/create'
router.post('/create', post_controller.create_post);
// route: 'post/delete'
router.delete('/delete', post_controller.delete_post);

module.exports = router;
