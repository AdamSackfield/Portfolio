import React from 'react';
import classes from './Intro.scss'
import MainImage from '../../assets/main.jpg'; // TODO Rename this and add alt=""

const Intro = props => { 
	return (
		<div id="intro" className={classes.Intro}>
			<img src={MainImage} alt="" />
			<div className={classes.Overlay}>
				<div className={classes.Header}>
					<h1>
						Adam<span>Sackfield</span>
					</h1>
					<h2>
						Full Stack<span>JS</span>Developer
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Intro;
