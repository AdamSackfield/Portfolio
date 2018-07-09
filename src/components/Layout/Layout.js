import React, { Fragment } from 'react';
import classes from './Layout.scss';

import Intro from '../Intro/Intro'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Layout = props => {
	return (
		<Fragment> 
			<section className={classes.Section}>
				<Intro />
			</section>

			<section className={classes.Section}>
				<About />
			</section>

			<section className={classes.Section}>
				<Projects />
			</section>

			<section className={classes.Section}>
				<Contact />
			</section>
		</Fragment>
	);
};

export default Layout;
