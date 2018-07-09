import React, { Component } from 'react';
import classes from './App.scss';

import Navigation from '../components/Navigation/Navgation';
import Layout from '../components/Layout/Layout'

class App extends Component {
	render() {
		return (
			<div className={classes.Main}>
				<Navigation />

				<Layout />
			</div>
		);
	}
}

export default App;
