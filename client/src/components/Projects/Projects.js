import React, { Fragment } from 'react';
import classes from './Projects.scss';

const Projects = () => {
	return (
		<Fragment>
			<div className={classes.Justify}>
				<h1 className={classes.Title}>Projects</h1>
				<div className={classes.Container}>
					<div className={classes.Project}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>Founder Connect</p>
					</div>

					<div className={classes.Project}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>Fitness Logger</p>
					</div>

					<div className={classes.Project}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>JavaScript Game</p>
					</div>

					<div className={[classes.Project, classes.MobileHide].join(' ')}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>Currency Converter</p>
					</div>

					<div className={[classes.Project, classes.MobileHide].join(' ')}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>Currency Converter</p>
					</div>

					<div className={[classes.Project, classes.MobileHide].join(' ')}>
						<img src="http://via.placeholder.com/3500x1500" alt="" />
						<p>Currency Converter</p>
					</div>
				</div>
				<p className={classes.Mobile}>More Projects available on desktop version</p>
			</div>
		</Fragment>
	);
};

export default Projects;
