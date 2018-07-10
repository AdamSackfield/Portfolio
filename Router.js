const Router = require('express').Router();
const nodeMailer = require('nodemailer');

Router.post('/email', (req, res) => {
	const { name, email, message } = req.body;

	let transporter = nodeMailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAILER_USER,
			pass: process.env.MAILER_PASS,
		},
	});

	let mailOptions = {
		from: email, // sender address
		to: 'Sacki2015@icloud.com', // list of receivers
		subject: `Portfolio Contact Form - ${name}`,
		text: message, // plain text body
		html: '<div>'+ message +'</div>', // html body
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log('Error', error);

			res.status(400).send('Mailer Error: ', error);
		}
		console.log('Message %s sent: %s', info.messageId, info.response);
		res.status(200).send('Success');
	});
});

module.exports = Router;
