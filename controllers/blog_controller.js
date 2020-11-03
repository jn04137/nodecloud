const database = require('../database/db.js').con;

exports.blog_list_page = (request, response) => {
	let sql_query = `SELECT * FROM BLOG`;
	database.query(sql_query, (queryError, queryResult) => {
		if (queryError) {
			console.log(queryError.sqlMessage);
		} else {
			response.render('blog/list_of_blogs', {queryResult});
		}
	});
}

// TODO check if this works
exports.blog_cat_page = (request, response) => {
	let sql_query = `SELECT * FROM POST WHERE PostName='${request.params.blog_cat}`	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
			response.redirect('/blog');
		} else {
			response.render('blog/blog_page', {queryResult});
		}
	});
}

// Create blog; Will only be available on the admin dash
exports.create_blog = (request, response) => {
	let sql_query = `INSERT INTO BLOG (BlogName, Field) VALUES ('${request.body.BlogName}', '${request.body.Field}')`	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) console.log(queryError);
		else {
			console.log(`Blog: ${request.body.BlogName} has been created`);
			response.redirect('/blog');
		}	
	});
}

// Delete blog; Will only be available on the admin dash
exports.delete_blog = (request, response) => {
	let sql_query = `DELETE FROM BLOG WHERE BlogName=${request.body.BlogName}`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError)
		} else {
			console.log(`Blog: ${BlogName} has been deleted`);
		}
	});
}
