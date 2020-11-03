const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

// route: '/user'
router.get('/', user_controller.user_home);

// route: '/user/signup'
router.post('/signup', user_controller.user_signup);
// route: '/user/login'
router.post('/login', user_controller.user_login);

module.exports = router;
