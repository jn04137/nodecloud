const express = require('express');
const router = express.Router();

const restricted_controller = require('../controllers/restricted_controller');

// Checks if the user session exists
// it will return the client to '/user' 
// if they are not logged in

function isAuthenticated(request, response, next) {
	if(request.session.user){
		return next();
	} else {
		response.redirect('/user');
	}
}

// renders the restricted page
// route: '/restricted'
router.get('/', isAuthenticated,restricted_controller.restricted_home);

module.exports = router;
