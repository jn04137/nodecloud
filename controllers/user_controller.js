const database = require('../database/db').con;
const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.user_signup = (req, res) => {
	bcrypt.genSalt(saltRounds, (err, salt)=> {
		bcrypt.hash(req.body.Password, salt, (err, hash) => {
			let sql_query = `INSERT INTO USER (Email, DisplayName, Password, FirstN, MidInitial, LastN) VALUES ('${req.body.Email}', '${req.body.DisplayName}', '${hash}', '${req.body.FirstN}', '${req.body.MidInitial}', '${req.body.LastN}')`;
			database.query(sql_query, (err, res) => {
				if(err) console.log(err);
				console.log('New user: ' + req.body.DisplayName + ' created');
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
