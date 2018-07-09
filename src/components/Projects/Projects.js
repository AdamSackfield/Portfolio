import React from 'react';
import classes from './Projects.scss';

const Projects = props => {
	return (
		<div id="projects" className={classes.Projects}>
			<article>
				<img className={classes.ProjectImg} src="https://placeimg.com/640/480/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
			<article>
				<img className={classes.ProjectImg} src="https://placeimg.com/320/240/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
			<article>
				<img className={classes.ProjectImg} src="https://placeimg.com/240/200/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
			<article>
				<img classNameName={classes.ProjectImg} src="https://placeimg.com/320/200/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
			<article>
				<img className={classes.ProjectImg} src="https://placeimg.com/440/300/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
			<article>
				<img className={classes.ProjectImg} src="https://placeimg.com/360/180/tech" alt=" " />
				<h1 className={classes.ProjectTitle}>Project Title</h1>
			</article>
		</div>
	);
};

export default Projects;
