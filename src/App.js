import React, { Component } from 'react';
import HomePage from './components/homepage';
import Brand from './components/brand'
import Detail from "./components/detail"
import Classify from "./components/classify"
import "./css/iconfont.css"
import LazyLoad from 'react-lazyload';
import Product from "./components/product"
import { BrowserRouter, Route, Redirect,Switch } from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div className="App">
         <BrowserRouter>
    			<Switch>
    				<Route path='/index' component={HomePage}></Route>
    				<Route path='/brand/:name' component={Brand}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/Classify" component={Classify}></Route>
            <Route path="/product/:id" component={Product}></Route>
    				<Redirect to='/index'></Redirect>
    			</Switch>
    		</BrowserRouter>
      </div>
    );
  }
}

export default App;
