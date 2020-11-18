const database = require('../database/db').con;

exports.create_comment = (request, response) => {
	let d = new Date();
	let date = `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;

	let sql_query = `INSERT INTO COMMENT(Email, PostNum, Content, Time) VALUES ('${request.session.user.Email}', ${request.body.PostNum}, '${(request.body.Content).replace("'", "''")}', '${date}')`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			console.log("Comment was successfully made");
			response.redirect('back');
		}
	});
}

exports.delete_comment = (request, response) => {
	let sql_query = `DELETE FROM COMMENT WHERE CommentID=${request.body.CommentID}`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError.sqlMessage);
		} else {
			response.redirect('back');	
			console.log('Comment was successsfully deleted');
		}
	});
}
