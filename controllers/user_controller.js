const database = require('../database/db').con;
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.user_home = (request, response) => { 
	response.render('user/signup_login');
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
