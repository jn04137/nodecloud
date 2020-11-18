const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

function isLoggedIn(request, response, next){
	if (request.session.user){
		console.log("This is the user info:\n");
		console.log(request.session.user);
		next();	
	} else {
		console.log("User is not logged in");
		response.redirect('/');
	}
}

// route: '/user'
router.get('/', user_controller.user_home);
// route: '/user/user_profile'
router.get('/your_profile', isLoggedIn, user_controller.your_profile);
// route: '/user/signup'
router.post('/signup', user_controller.user_signup);
// route: '/user/login'
router.post('/login', user_controller.user_login);
// route: '/user/logout'
router.get('/logout', user_controller.user_logout);
// route:'/user/user_delete'
router.post('/user_delete', user_controller.delete_user);

module.exports = router;
