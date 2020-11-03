const express = require('express');
const router = express.Router();
const admin_controller = require('../controllers/admin_controller');

function isAdmin(request, response, next) {
	
}
// URL to the admin dashboard 
// route: '/admin'
router.get('/', admin_controller.admin_home);

module.exports = router;
