const database = require('../database/db').con;

exports.create_comment = (request, response) => {
	console.log(request.session.user);
	let sql_query = `INSERT INTO COMMENT(Email, PostNum, Content) VALUES ('${request.session.user.Email}', ${request.body.PostNum}, '${request.body.Content}')`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			console.log("Comment was successfully made");
			response.redirect(`/post/post_page/${request.body.PostNum}`)
		}
	});
}

exports.delete_comment = (request, response) => {
	let sql_query = `DELETE FROM COMMENT WHERE CommentID=${request.body.CommentID}`
	database.query(sql_query, (queryError, queryResult) => {
		if(sqlError) {console.log(queryError.sqlMessage);}
		else {console.log('Comment was successsfully deleted');}
	});
}
