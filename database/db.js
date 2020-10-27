const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'admin',
	password: 'musicmaster45',
	database: 'cloudhealth'
});

con.connect((err)=> {
	if (err) throw err;
	console.log('connected!');
});

// Creating user table
const user_schema = require('../models/user_model').user_schema;
con.query(user_schema,(err, res) => {
		if(err) {
			console.log(err);
		}
		console.log('User table created');
});

// Creating Blog table
const blog_schema = require('../models/blog_model').blog_schema;
con.query(blog_schema, (err, res) => {
	if (err) {
		console.log(err);
		return;
	};
	console.log('Blog table created');
});

// Creating Post table
const post_schema = require('../models/post_model').post_schema;
con.query(post_schema, (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('Post table created');
})


exports.con = con;
