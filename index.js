const express = require('express');
const app = express();

const PORT = 3000;

const connection = require('./database/db').con;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(PORT, () => {
	console.log(`App is listening on port: ${PORT}`);
});
