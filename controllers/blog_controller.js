const database = require('../database/db.js').con;

// Create blog; Will only be available on the admin dash
exports.create_blog = (request, response) => {
	let sql_query = `INSERT INTO BLOG (BlogName, Field) VALUES ('${request.body.BlogName}', '${request.body.Field}')`	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryErro) console.log(queryError);
		console.log(`Blog: ${request.body.BlogName} has been created`);
	});
}

// Delete blog; Will only be available on the admin dash
exports.delete_blog = (request, response) => {
	let sql_query = `DELETE FROM BLOG WHERE BlogName=${request.body.BlogName}`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) console.log(queryError);
		else console.log(`Blog: ${BlogName} has been deleted`);
	});
}
