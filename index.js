require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');

// Make sure to setup privileges for user in the 
// database for session to work properly
// do not flush privileges after setting up user

const MySQLStore = require('express-mysql-session')(session);

var options = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD, 
	database: process.env.DATABASE
}

const sessionStore = new MySQLStore(options);

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

// Adds the routers (URL endpoints) to the application
app.use('/user', require('./routes/user_router'));
app.use('/restricted', require('./routes/restricted_router'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`);
});
