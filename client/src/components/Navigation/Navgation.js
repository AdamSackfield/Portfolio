import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Navigation.scss';

const smoothScroll = event => {
	event.preventDefault();
	let name = event.target.name;
	// TODO! scrollIntoView doesn't allow smooth parameter in Safari
	document.getElementById(name).scrollIntoView({ behavior: 'smooth' });
};

const Navigation = () => {
	return (
		<header className={classes.Header}>
			<nav className={classes.Navigation}>
				<a name="intro" className={[classes.Link, classes.HideMobile].join(' ')} onClick={smoothScroll}>
					Home
				</a>
				<a name="about" className={classes.Link} onClick={smoothScroll}>
					About
				</a>
				<a name="intro" className={classes.Logo} onClick={smoothScroll}>
					AS
				</a>
				<a name="projects" className={classes.Link} onClick={smoothScroll}>
					Projects
				</a>
				<a name="contact" className={classes.Link} onClick={smoothScroll}>
					Get in touch
				</a>
			</nav>
		</header>
	);
};

export default Navigation;
