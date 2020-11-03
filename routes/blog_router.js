const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blog_controller');


// route is "/blog/create"
router.post('/create', blog_controller.create_blog);

// route is "/blog/delete"
router.delete('/delete', blog_controller.delete_blog);

module.exports = router;
