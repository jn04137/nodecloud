const mysql = require('mysql2');
const bcrypt = require('bcrypt');

const saltRounds = 10;

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
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'USER' created")
	}
});

// Creating admin table
const admin_schema = require('../models/admin_model').admin_schema;
con.query(admin_schema, (queryError, queryResult) => {
	if(queryError){
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'ADMIN' created");
	}
});

// Creating Blog table
const blog_schema = require('../models/blog_model').blog_schema;
con.query(blog_schema, (queryError, queryResult) => {
	if (queryError) {
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'BLOG' created");
	}
});

// Creating Post table
const post_schema = require('../models/post_model').post_schema;
con.query(post_schema, (queryError, queryResult) => {
	if (queryError) {
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'POST' created");
	}
});

const comment_schema = require('../models/comment_model').comment_schema;
con.query(comment_schema, (queryError, queryResult) => {
	if(queryError) {
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'COMMENT' created");
	}
});

const user_report_schema = require('../models/report_model').user_report_schema;
con.query(user_report_schema, (queryError, queryResult) => {
	if(queryError){
		console.log(queryError.sqlMessage);
	} else {
		console.log("Table 'USER_REPORT' created");
	}
});

const report_schema = require('../models/report_model').report_schema;
con.query(report_schema, (queryError, queryResult) => {
	if(queryError){
		console.log(queryError.sqlMessage);
	} else {
		console.log("TABLE 'POST_REPORT' created");
	}
});

function create_user(Email, DisplayName, Password, FirstN, MidInitial, LastN, database, bcrypt){
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(Password, salt, (err, hash)=> {
		let default_admin = `INSERT INTO USER(Email, DisplayName, Password, FirstN, MidInitial, LastN) VALUES ('${Email}', '${DisplayName}', '${hash}', '${FirstN}', '${MidInitial}', '${LastN}')`;
			database.query(default_admin, (queryError, queryResult)=> {
				if(queryError) {
					console.log(queryError.sqlMessage);
					console.log("Admin User was not created or already exists in USER table");
				} else{
					console.log("Admin user was added to user table");
				}
			});
		});
	});
}

bcrypt.genSalt(saltRounds, (err, salt) => {
	bcrypt.hash('password', salt, (err, hash)=> {
	let default_admin = `INSERT INTO USER(Email, DisplayName, Password, FirstN, MidInitial, LastN) VALUES ('admin@cloudhealth.com', 'Admin', '${hash}', 'Admin', 'A', 'Admin')`;
		con.query(default_admin, (queryError, queryResult)=> {
			if(queryError) {
				console.log(queryError.sqlMessage);
				console.log("Admin User was not created or already exists in USER table");
			} else{
				console.log("Admin user was added to user table");
			}
		});
	});
});

function createBlogs(BlogName, Description, database){
	let sql_query = `INSERT INTO BLOG(BlogName, DescField) VALUES ('${BlogName}', '${Description}')`
	database.query(sql_query, (queryError, queryResult) => {
		if (queryError){
			console.log(`${BlogName} Table Already Exists or Failed to be created`);
		} else {
			console.log(`${BlogName} Blog was successfully created`);
		}
	});
}
function createPost(PostNum, Email, BlogID, Title, Text, database){
	let d = new Date();
	let date = `${d.getUTCFullYear()}-${d.getUTCMonth()+1}-${d.getUTCDate()} ${d.getUTCHours()}:${d.getUTCMinutes()}:${d.getUTCSeconds()}`;

	let sql_query = `INSERT INTO POST(PostNum, Email, BlogID, Title, Text, Time) VALUES ('${PostNum}','${Email}', '${BlogID}', '${Title}', "${Text}", '${date}')`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
		} else {
			console.log("Post was created successfully!");
		}
	});
}

function createComment(CommentID, Email, PostNum, Content, database){
	sql_query = `INSERT INTO COMMENT VALUES('${CommentID}', '${Email}', '${PostNum}', '${Content}')`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError.sqlMessage);
			console.log("Comment probably already exists");
		}
		else{
			console.log("Comment created successfully!");
		}
	})
}
function createUserReport(user_reportID, offending_user, database){
	let sql_query = `INSERT INTO USER_REPORT VALUES (${user_reportID}, '${offending_user}')`
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError.sqlMessage);
			console.log("User report probably already exists!");
		}else {
			console.log("User report created!");
		}
	});
}

function createPostReport(reportID, offending_post, database){
	let sql_query = `INSERT INTO POST_REPORT VALUES (${reportID}, '${offending_post}')`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
			console.log("Post report probably already exists");
		} else {
			console.log("Post report created!");
		}
	});
}

create_user('jnganguyen3@gmail.com', 'wthunder', 'password', 'Jonathan', 'N', 'Nguyen', con, bcrypt);
create_user('jn04137@georgiasouthern.edu', 'thunder45', 'password', 'John', 'J', 'Ngu', con, bcrypt);
createBlogs("Cardiology", "This is the place to post about heart stuff.", con);
createBlogs("General", "This is the place to post about general stuff.", con);
createBlogs("Osteology", "This is the place to post about bone stuff.", con);
createBlogs("Cancer Research", "This is the place to post about cancer research.", con);

createPost(1, "jnganguyen3@gmail.com", 1, "First Post in Cardio", "This is the content of the post", con);
createPost(2, "jnganguyen3@gmail.com", 1, "Cool Title", "This is just more filler", con);
createPost(3, "jnganguyen3@gmail.com", 2, "First Post in General", "This is the content of the first general post", con);
createPost(4, "admin@cloudhealth.com", 3, "Admin Made Post", "This is a post made by the admin", con);
createPost(5, "jnganguyen3@gmail.com", 4, "First Post in Cancer Research", "This is the first post in cancer research!", con);
createComment(1, "jnganguyen3@gmail.com", 2, "Filler comment for the filler post.", con);
createComment(2, "admin@cloudhealth.com", 2, "This comment was made by the admin user.", con);
createComment(3, "jn04137@georgiasouthern.edu", 4, "Wow, very interesting!", con);
createUserReport(1, "jnganguyen3@gmail.com", con);
createPostReport(1, 2, con);

setTimeout(()=>{
	let sql_query = `INSERT INTO ADMIN(Email) VALUES ('admin@cloudhealth.com')`;
	con.query(sql_query, (queryError, queryResult) => {
		if(queryError) {
			console.log(queryError.sqlMessage);
			console.log("Admin User was not added to admin");
		} else{
			console.log("Admin User successfully added to Admin table");
		}
	});
}, 3000)

exports.con = con;
