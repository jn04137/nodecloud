const database = require('../database/db').con;

exports.create_post = (request, response) => {
	sql_query = `INSERT INTO POST(Email, BlogID, Title, Text) VALUES ('${request.session.user.Email}', '${request.body.BlogID}', '${request.body.Title}', '${request.body.Text}')`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			response.redirect(`/blog/category/${cat_title}/${BlogID}`);
		}
	});
}

exports.delete_post = (request, response) => {
	sql_query = `DELETE FROM POST WHERE PostNum='${request.body.PostNum}'`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlsqlMessage)
		} else {
			console.log('Post was successfully deleted');
		}
	});
}

