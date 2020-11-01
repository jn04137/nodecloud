const express = require('express');
const router = express.Router();
const blog_controller = require('../controllers/blog_controller');

router.post('/create', blog_controller.create_blog);
router.delete('/delete', blog_controller.delete_blog);

module.exports = router;
