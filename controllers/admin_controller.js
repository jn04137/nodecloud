const database = require('../database/db').con;
const bcrypt = require('bcrypt');

const saltRounds=10;

exports.admin_home = (request, response) => {
	let reported_posts;	
	let reported_users;

	let sql_query = `SELECT COUNT(offending_post) as total, offending_post FROM POST_REPORT group by (offending_post)`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError) console.log(queryError.sqlMessage);
		else{
			reported_posts=queryResult;
			sql_query=`SELECT COUNT(offending_user) as total, offending_user FROM USER_REPORT GROUP BY offending_user`;
			database.query(sql_query, (queryError, queryResult) => {
				if(queryError) console.log(queryError.sqlMessage);
				else{
					reported_users=queryResult;
					response.render('admin/admin_dash', {
						user: request.session.user,
						posts: reported_posts,
						users: reported_users
					});
				} 
			});
		}
	});
}

exports.admin_login = (request, response) => {
	let sql_query = `SELECT USER.Email, USER.DisplayName, Password, ADMIN.AdminRank FROM USER LEFT JOIN ADMIN ON USER.Email=ADMIN.Email WHERE ADMIN.Email='${request.body.Email}'`;
	database.query(sql_query, (queryError, queryResult) => {
		if(queryError){
			console.log(queryError.sqlMessage);
			response.redirect('back');
		} else {
			if(queryResult[0] == undefined) response.redirect('/user');
			bcrypt.compare(request.body.Password, queryResult[0].Password, (compError, compResult) => {
				if(compResult){
					console.log('Password matches');
					console.log(queryResult[0]);
					request.session.user = queryResult[0];
					response.redirect('/admin');
				} else {
					console.log('Password does not match');
					response.redirect('/back');
				}
			});
		}
	});	
}
