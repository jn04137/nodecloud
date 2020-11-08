const database = require('../database/db.js').con;

// This will generate a page with a list of blog pages
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

// Queries information for blog first and then queries for list of posts
exports.blog_cat_page = (request, response) => {
	let blog_info;
	let posts;

	// Query for blog info occurs in the following line
	let sql_query = `SELECT * FROM BLOG WHERE BlogID='${request.params.blog_code}'`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {

			// On success, the following lines with query for the corresponding posts
			blog_info = queryResult[0];
			sql_query = `SELECT * FROM POST WHERE BlogID='${request.params.blog_code}'`	
			database.query(sql_query, (queryError, queryResult) => {
				if(queryError){
					console.log(queryError.sqlMessage);
					response.redirect('/blog');
				} else {
					response.render('blog/blog_page', {
							posts: queryResult, 
							blog: blog_info
					});
				}
			});
		}
	});
}

// Create blog; Will only be available on the admin dash
exports.create_blog = (request, response) => {
	let sql_query = `INSERT INTO BLOG (BlogName, DescField) VALUES ('${request.body.BlogName}', '${request.body.DescField}')`	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError);
			response.redirect('/blog');
		} else {
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
			console.log(queryError);
		} else {
			console.log(`Blog: ${BlogName} has been deleted`);
		}
	});
}
