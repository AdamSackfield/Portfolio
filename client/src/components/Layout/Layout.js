import React, { Fragment } from 'react';
import classes from './Layout.scss';

import Intro from '../Intro/Intro'
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Layout = props => {
	return (
		<Fragment> 
			<section className={[classes.Section, classes.HideMobile].join(' ')}>
				<Intro />
			</section>

			<section className={classes.Section}>
				<About />
			</section>

			<section className={classes.Section} style={{ 
				backgroundColor: '#494949', 
				fontSize: '2em', 
				textAlign: 'center',
				paddingTop: '60px',
				color: 'white'
			}}>
				<h1>Projects</h1>
				<Projects />
			</section>

			<section className={classes.Section}>
				<Contact />
			</section>
		</Fragment>
	);
};

export default Layout;
