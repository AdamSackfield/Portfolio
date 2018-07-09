import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.scss';

const smoothScroll = (event) => {
	event.preventDefault();
	let name = event.target.name;
	document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
}

const Navigation = () => {
	return ( 
		<nav className={classes.Navigation}>
			<a name='intro' className={classes.Link} onClick={smoothScroll}>Home</a>
			<a name='about' className={classes.Link} onClick={smoothScroll}>About</a>
			<Link className={classes.Logo} to="/">Logo</Link>
			<a name='projects' className={classes.Link} onClick={smoothScroll}>Projects</a>
			<a name='contact' className={classes.Link} onClick={smoothScroll}>Get in touch</a>
		</nav>
	);
};

export default Navigation;
