import React, { Fragment } from 'react';
import { Section, SectionsContainer } from 'react-fullpage';

import Navigation from '../Navigation/Navgation';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Layout = () => {
	let options = {
		sectionClassName: 'section',
		anchors: ['intro', 'about', 'projects', 'contact'],
		scrollBar: false,
		navigation: true,
		verticalAlign: true,
		sectionPaddingTop: '0',
		sectionPaddingBottom: '0',
		arrowNavigation: true,
		delay: 1000,
		css3: true,
	};

	return (
		<Fragment>
			<Navigation />

			<SectionsContainer {...options}>
				<Section>
					<Intro />
				</Section>

				<Section>
					<About />
				</Section>

				<Section>
					<Projects />
				</Section>

				<Section>
					<Contact />
				</Section>
			</SectionsContainer>
		</Fragment>
	);
};

export default Layout;
