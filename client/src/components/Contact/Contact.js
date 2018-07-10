import React, { Component } from 'react';
import classes from './Contact.scss';
import axios from 'axios'

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			phone: '',
			message: '' 
		};
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value })
	};

	handleSubmit() {
		event.preventDefault()
		const { name, email, message } = this.state
		axios.post('http://www.adamsackfield.com/mailer/email', { name, email, message }).then(response => {
			if(response.status === 200) {
				console.log('Message Sent')
			} else {
					console.log('Message sending failure.')
			}
		})
	}

	render() {
		return (
			<div id="contact" className={classes.Contact}>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<h1>Get in Touch</h1>

					<div className={classes.InputGroup}>
						<input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange.bind(this)} required />
					</div>

					<div className={classes.InputGroup}>
						<input name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange.bind(this)} required />
					</div>

					<div className={classes.InputGroup}>
						<input name="phone" type="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange.bind(this)} required />
					</div>

					<div className={classes.InputGroup}>
						<textarea name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange.bind(this)} required />
					</div>

					<button>Send Message</button>
				</form>

				<footer>Site Designed and Developed by Adam Sackfield &copy;{new Date().getFullYear()}</footer>
			</div>
		);
	}
}

export default Contact;
