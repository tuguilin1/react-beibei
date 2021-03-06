import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducer'
import registerServiceWorker from './registerServiceWorker';
const store = createStore(reducers,compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
))



ReactDOM.render(
	(<Provider store={store}>
		<App/>
	</Provider>),

	document.getElementById('root')
);
registerServiceWorker();
