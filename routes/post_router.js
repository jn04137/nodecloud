const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/post_controller');

// route: '/post/create'
router.post('/create', post_controller.create_post);

// route: '/post/delete'
router.delete('/delete', post_controller.delete_post);

// route '/post/post_page/:post_title/PostNum'
router.get('/post_page/:PostNum', post_controller.post_page);

module.exports = router;
