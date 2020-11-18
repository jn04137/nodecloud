const database = require('../database/db').con;

exports.create_user_report = (request, response) => {
	let sql_query = `INSERT INTO USER_REPORT(offending_user) VALUES ('${request.body.Email}')`;	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage());
			response.redirect('back');
		} else {
			response.redirect('back');
		}
	});
}

exports.create_post_report = (request, response) => {
	let sql_query = `INSERT INTO POST_REPORT(offending_user, offending_post) VALUE ('${request.body.Email}', ${request.body.PostNum})`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) console.log(queryError.sqlMessage);
		else {
			console.log("Post has been reported");
			response.redirect('back');
		}
	});
}


