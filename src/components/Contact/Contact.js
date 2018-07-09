import React from 'react';
import classes from './Contact.scss';

const Contact = () => {
	return (
		<div id="contact" className={classes.Contact}>
			<form>
				<h1>Get in Touch</h1>

				<div className={classes.InputGroup}>
					<input type="text" placeholder="Name" required />
				</div>

				<div className={classes.InputGroup}>
					<input type="email" placeholder="Email" required />
				</div>

				<div className={classes.InputGroup}>
					<input type="phone" placeholder="Phone" required />
				</div>

				<div className={classes.InputGroup}>
					<textarea name="message" placeholder="Message" required />
				</div>

				<button>Send Message</button>
			</form>

      <footer>Site Designed and Developed by Adam Sackfield &copy;{new Date().getFullYear()}</footer>
		</div>
	);
};

export default Contact;
