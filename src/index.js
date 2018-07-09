import React from 'react';
import ReactDOM from 'react-dom';

// React-Router-Dom Imports
import { Router } from 'react-router-dom';

// HOC Imports
import History from './hoc/History'; // History is used to navigate the user programmatically

import App from './containers/App';

ReactDOM.render(
	<Router history={History}>
		<App />
	</Router>,
	document.getElementById('app')
);
