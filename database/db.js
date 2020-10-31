const mysql = require('mysql2');

const con = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DATABASE
});

con.connect((connectError)=> {
	if (connectError) throw connectError;
	console.log('connected!');
});

// Creating user table
const user_schema = require('../models/user_model').user_schema;
con.query(user_schema,(queryError, queryResult) => {
	if(queryError) {
		console.log(queryError);
	}
	console.log('User table created');
});

// Creating Blog table
const blog_schema = require('../models/blog_model').blog_schema;
con.query(blog_schema, (queryError, queryResult) => {
	if (queryError) {
		console.log(queryError);
	}
	console.log('Blog table created');
});

// Creating Post table
const post_schema = require('../models/post_model').post_schema;
con.query(post_schema, (queryError, queryResult) => {
	if (queryError) {
		console.log(queryError);
	}
	console.log('Post table created');
});


exports.con = con;
