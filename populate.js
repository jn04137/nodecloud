const database = require('./database/db').con;
const bcrypt = require('bcrypt');

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

function create_post(PostNum, Email, BlogID, Title, Text, database){
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
