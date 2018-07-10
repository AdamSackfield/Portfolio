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
	console.log('Wrong')
	Server.use(express.static('client/dist'));
	Server.get('*')
		.then(response => {
			response.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
		})
		.catch(error => {
			console.log('DevEnv:error', error);
		});  
}   

Server.listen(PORT, () => {
	console.log(`Serving on ${PORT}`);
});
