import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Layout from '../components/Layout/Layout'
import Success from '../components/Success/Success'
import ErrorComp from '../components/Error/Error'

class App extends Component {
	render() {
		return (
			<div className={classes.Main}>
				{/* <Navigation /> */}

				<Switch>
					<Route path='/' exact component={Layout} />
					<Route path='/success' exact component={Success} />
					<Route path='/error' exact component={ErrorComp} />
				</Switch>
			</div>
		);
	}
}

export default App;
