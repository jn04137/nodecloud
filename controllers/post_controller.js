const database = require('../database/db').con;

exports.create_post = (request, response) => {
	console.log(request.body.Text);
	console.log(request.body.Title);
	let sql_query = `INSERT INTO POST(Email, BlogID, Title, Text) VALUES ('${request.session.user.Email}', '${request.body.BlogID}', '${request.body.Title}', "${request.body.Text}")`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			response.redirect(`/blog/category/${request.body.cat_title}/${request.body.BlogID}`);
		}
	});
}

exports.delete_post = (request, response) => {
	let sql_query = `DELETE FROM POST WHERE PostNum='${request.body.PostNum}'`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlsqlMessage)
		} else {
			console.log('Post was successfully deleted');
		}
	});
}

// This controller uses two queries to send the post information  first and then list of comments to the view
exports.post_page = (request, response) => {
	
	let sql_query = `SELECT * FROM POST WHERE PostNum=${request.params.PostNum}`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			post_info = queryResult[0];

			sql_query = `SELECT * FROM COMMENT WHERE PostNum=${request.params.PostNum}`	
			database.query(sql_query, (queryError, queryResult) => {
				if(queryError) {
					console.log(queryError.sqlMessage);
				} else {
					response.render('post/post_page', {
						post_info, 
						comments: queryResult
					});
				}
			})
		}
	});
}
