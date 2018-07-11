import React from 'react';
import classes from './Intro.scss'

const Intro = props => { 
	return ( 
		<div className={classes.Intro}>
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
