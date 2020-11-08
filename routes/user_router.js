const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');

// route: '/user'
router.get('/', user_controller.user_home);
// route: '/user/user_profile'
router.get('/your_profile', user_controller.your_profile);
// route: '/user/signup'
router.post('/signup', user_controller.user_signup);
// route: '/user/login'
router.post('/login', user_controller.user_login);
// route: '/user/logout'
router.get('/logout', user_controller.user_logout);

module.exports = router;
