const express = require('express');
const router = express.Router();
const admin_controller = require('../controllers/admin_controller');

function isAdmin(request, response, next) {
	// if user is not logged in or not admin, 
	// this will redirect them to the login
	if(request.session.user == undefined) response.redirect('/user');
	if(request.session.user.AdminRank == 1){
		next();
	} else{
		response.redirect('/user');
	}	
}
// URL to the admin dashboard 
// route: '/admin'
router.get('/', isAdmin, admin_controller.admin_home);

router.post('/login', admin_controller.admin_login);

module.exports = router;
