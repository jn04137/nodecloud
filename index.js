const express = require('express');
const app = express();
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

var options = {
	host: 'localhost',
	user: 'admin',
	password: 'password', 
	database: 'cloudhealth'
}

const sessionStore = new MySQLStore();

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
	key:'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));

app.use('/user', require('./routes/user_router'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`);
});
