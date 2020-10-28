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
	sql_query = `SELECT Password from USER where Email='${req.body.Email}'`;
	database.query(sql_query, (err, res) => {
		if (err) console.log(err);
		console.log(res[0].Password);
		bcrypt.compare(req.body.Password, res[0].Password, (err, res) => {
			if(res){
				console.log('password matches');
			} else {
				console.log('Password does not match or user does not exist');
			}	
		});
	});

	res.send("This is the login controller!");
}
