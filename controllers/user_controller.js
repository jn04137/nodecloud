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

exports.user_login = (req, res) => {
	res.send('This is the login controller');
}
