require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const Router = require('./Router');

const Server = express();
const PORT = process.env.PORT || 3000;

Server.use(cors());
Server.use(morgan('tiny'));
Server.use(bodyParser.json());
Server.use('/mailer', Router);

if (process.env.NODE_ENV === 'production') {
	console.log('App Running in Production')
	Server.use(express.static('client/dist'));
	Server.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
	});
}

Server.listen(PORT, () => {
	console.log(`Serving on ${PORT}`);
});
