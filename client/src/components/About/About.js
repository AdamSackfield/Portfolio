import React from 'react';
import classes from './About.scss';

const About = () => {
	return (
		<div className={classes.About}>
			<div>
				<h1>About Me</h1>

				<h2>
					"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows
					where you live. Code for readability."
				</h2>

				<div className={classes.Bio}>
					<p>
						Adam Sackfield is a Freelance Web Developer and Project Manager who helps businesses build an
						online presence.
					</p>

					<p>
						After several years of self teaching outside of work, he now works freelance, building scalable
						and maintainable code for individuals and companies. Adam has become proficient in many
						technologies and systems, such as Vanilla JavaScript, React and Node.
					</p>

					<p>
						Adam also enyoys running, reading, music, technology and keeping up with modern trends in web
						development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
