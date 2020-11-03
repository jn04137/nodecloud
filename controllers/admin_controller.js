const database = require('../database/db').con;

exports.admin_home = (request, response) => {
	response.render('admin/admin_dash');
}
