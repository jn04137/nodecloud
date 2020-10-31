const database = require('../database/db').con;
const bcrypt = require('bcrypt');

const saltRounds = 10;

function isAuthenticated(request, result, next){
	if(request.session.user){
		return next();
	} else {
		result.redirect('/user');
	}
}
exports.user_signup = (request, response) => {
	bcrypt.genSalt(saltRounds, (saltErr, salt)=> {
		bcrypt.hash(request.body.Password, salt, (hashErr, hash) => {
			let sql_query = `INSERT INTO USER (Email, DisplayName, Password, FirstN, MidInitial, LastN) VALUES ('${request.body.Email}', '${request.body.DisplayName}', '${hash}', '${request.body.FirstN}', '${request.body.MidInitial}', '${request.body.LastN}')`;
			database.query(sql_query, (queryErr, result) => {
				if(queryErr) console.log(queryErr);
				console.log('New user: ' + request.body.DisplayName + ' created');
			});

			res.send('Congrats! You just made an account!');
		})
	})	
}

exports.user_login = (request, response) => {
	sql_query = `SELECT * from USER where Email='${request.body.Email}'`;
	database.query(sql_query, (err, dbResult) => {
		bcrypt.compare(request.body.Password, dbResult[0].Password, (err, compResult) => {
			if(compResult){
				console.log('password matches');
				console.log(dbResult[0]);
				request.session.user = dbResult[0];
				response.redirect('/restricted');
			} else {
				console.log('password does not match');
			}
		});	
	});
}
