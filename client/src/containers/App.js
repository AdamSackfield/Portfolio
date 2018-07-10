import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import classes from './App.scss';

import Navigation from '../components/Navigation/Navgation';
import Layout from '../components/Layout/Layout'
import Success from '../components/Success/Success'

class App extends Component {
	render() {
		return (
			<div className={classes.Main}>
				<Navigation />

				<Switch>
					<Route path='/' exact component={Layout} />
					<Route path='/success' exact component={Success} />
				</Switch>
			</div>
		);
	}
}

export default App;
