const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
	let user = request.session.user;
	response.render('restricted/main');
});

module.exports = router;
