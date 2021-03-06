const database = require('../database/db').con;

exports.create_post = (request, response) => {
	let d = new Date();
	let date = `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;
	let sql_query = `INSERT INTO POST(Email, BlogID, Title, Text, Time) VALUES ('${request.session.user.Email}', '${request.body.BlogID}', '${(request.body.Title).replace("'", "''")}', '${(request.body.Text).replace("'", "''")}', '${date}')`;
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
	console.log(request.body.PostNum);
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			console.log('Post was successfully deleted');
			response.redirect('back');
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
						comments: queryResult,
						user: request.session.user,
					});
				}
			})
		}
	});
}
