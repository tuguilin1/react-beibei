import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './components/homepage';
import Brand from './components/brand'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'

ReactDOM.render(
	<BrowserRouter>
		<Switch>

			<Route path='/index' component={HomePage}></Route>
			<Route path='/brand/:name' component={Brand}></Route>
			<Redirect to='/index'></Redirect>
		</Switch>
	</BrowserRouter>,

	document.getElementById('root')
);
registerServiceWorker();
