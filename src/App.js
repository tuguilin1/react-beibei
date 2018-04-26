import React, { Component } from 'react';
import HomePage from './components/homepage';
import Brand from './components/brand'

import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
			<Switch>
				<Route path='/index' component={HomePage}></Route>
				<Route path='/brand/:name' component={Brand}></Route>
				<Redirect to='/index'></Redirect>
			</Switch>
		</BrowserRouter>
      </div>
    );
  }
}

export default App;
