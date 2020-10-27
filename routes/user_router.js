const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

router.get('/', (err, res) => {
	res.render('user/signup_login');
});

router.post('/signup', user_controller.user_signup);

module.exports = router;
