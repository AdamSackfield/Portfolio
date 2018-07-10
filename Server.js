require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const Router = require('./Router');

const Server = express();
const PORT = process.env.PORT || 3000;

Server.use(cors());
Server.use(morgan('tiny'));
Server.use(bodyParser.json());
Server.use('/mailer', Router);

Server.listen(PORT, () => {
	console.log(`Serving on ${PORT}`);
});
