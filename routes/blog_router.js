const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blog_controller');

// Renders a page consisting of a list of blogs
router.get('/', blog_controller.blog_list_page);

// route is "/blog/create"
router.post('/create', blog_controller.create_blog);

// blog_cat is short for blog category
router.get('/category/:blog_cat/:blog_code', blog_controller.blog_cat_page);

// route is "/blog/delete"
router.delete('/delete', blog_controller.delete_blog);

module.exports = router;
