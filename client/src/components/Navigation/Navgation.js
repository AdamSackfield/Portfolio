import React from 'react';

import classes from './Navigation.scss';

const Navigation = () => {
	return (
		<header className={classes.Header}>
			<nav className={classes.Navigation}>
				<a name="intro" href='#intro' className={classes.Link} >
					Home
				</a>
				<a name="about" href='#about' className={classes.Link} >
					About
				</a>
				<a name="intro" href='#intro' className={classes.Logo} >
					AS
				</a>
				<a name="projects" href='#projects' className={classes.Link} >
					Projects
				</a>
				<a name="contact" href='#contact' className={classes.Link} >
					Get in touch
				</a>
			</nav>
		</header>
	);
};

export default Navigation;
