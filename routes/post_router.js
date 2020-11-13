const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/post_controller');

function isLoggedIn(request, response, next) {
	if(request.session.user){
		next();
	} else {
		response.send("Please log in");
	}
}
// route: '/post/create'
router.post('/create', isLoggedIn, post_controller.create_post);

// route: '/post/delete'
router.post('/delete', post_controller.delete_post);

// route '/post/post_page/:post_title/PostNum'
router.get('/post_page/:PostNum', post_controller.post_page);

module.exports = router;
