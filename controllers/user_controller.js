const database = require('../database/db').con;
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.user_home = (request, response) => { 
	if(request.session.user){
		response.redirect('/blog');
	} else{
		response.render('user/signup_login');
	}
}

// Brings up the user's profile
// Uses 3 queries to load user, user's posts, and user's comments
exports.your_profile = (request, response) => {
	let user_email = request.session.user.Email;	
	let user_info;	
	let list_of_posts;
	let list_of_comments;
	let sql_query = `SELECT * FROM USER WHERE Email='${user_email}'`	
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError);
		} else {
			user_info = queryResult[0];
			sql_query = `SELECT * FROM POST WHERE Email='${user_email}'`	
			database.query(sql_query, (queryError, queryResult) => {
				if(queryError){
					console.log(queryError);
				} else {
					list_of_posts = queryResult;
					sql_query = `SELECT * FROM COMMENT WHERE Email='${user_email}'`
					database.query(sql_query, (queryError, queryResult) => {
						if(queryError){
							console.log(queryError);
						} else {
							list_of_comments = queryResult;
							response.render('user/profile_page', {
								user: user_info,
								posts: list_of_posts,
								comments: list_of_comments
							});
						}
					});
				}
			});		
		}
	});
}

// This is the user sign-up controller
exports.user_signup = (request, response) => {
	bcrypt.genSalt(saltRounds, (saltError, salt)=> {
		bcrypt.hash(request.body.Password, salt, (hashError, hash) => {
			let sql_query = `INSERT INTO USER (Email, DisplayName, Password, FirstN, MidInitial, LastN) VALUES ('${request.body.Email}', '${request.body.DisplayName}', '${hash}', '${request.body.FirstN}', '${request.body.MidInitial}', '${request.body.LastN}')`;
			database.query(sql_query, (queryError, queryResult) => {
				if(queryError){
					if(queryError.code === 'ER_DUP_ENTRY'){
						response.send('User with this email already exists');
					} else{
						console.log(queryError);
						response.redirect('/user');
					}
				} else {
					console.log('New user: ' + request.body.DisplayName + ' created');
					response.redirect('/user');
				}
			});

		});
	});	
}

// This is the user sign-in controller
exports.user_login = (request, response) => {
	let sql_query = `SELECT * from USER where Email='${request.body.Email}'`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) console.log(queryError.sqlMessage);
		bcrypt.compare(request.body.Password, queryResult[0].Password, (compError, compResult) => {
			if(compResult){
				console.log('password matches');
				console.log(queryResult[0]);
				request.session.user = queryResult[0];
				response.redirect('/blog');
			}
			else {
				console.log('password does not match');
				response.redirect('/user');
			}
		});	
	});
}

exports.user_logout = (request, response) => {
	request.session.destroy((err) => {
		if(err){
			console.log(err);
			response.redirect('/user');
		} else {
			response.redirect('/user');
		}
	});
}
