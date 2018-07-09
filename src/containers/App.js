import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import classes from './App.scss';

import Navigation from '../components/Navigation/Navgation';
import Intro from '../components/Intro/Intro'

class App extends Component {
	render() {
		return (
			<div className={classes.Main}>
				<Navigation />

				<Switch>
					<Route path='/' exact component={Intro} />
				</Switch>
			</div>
		);
	}
}

export default App;
