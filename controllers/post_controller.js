const database = require('../database/db').con;

function isAuthenticated(request, result, next) {
	if(request.session.user){
		return next();
	} else {
		result.redirect('/user');
	}
}

