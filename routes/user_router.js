const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

router.get('/', (request, response) => {
	response.render('user/signup_login');
});

router.post('/signup', user_controller.user_signup);
router.post('/login', user_controller.user_login);

module.exports = router;
