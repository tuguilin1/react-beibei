import React, { Component } from 'react';
import Header from "./header"
import Nav from "./nav"
import getData from "../api/jsonp"
import Shop from "./shop"
class HomePage extends Component{
	constructor(props){
		super(props)
		this.state = {
			page:"推荐"
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		},this.shop.handlePage(event.target.innerHTML))
	}
	render(){
		const navList = ["推荐","童装","童鞋","婴童用品","女包","鞋包","居家","美妆","美食","下期预告"].reverse()
		return(
			<div>
				<Nav data={navList} handleClick = {this.handleClick.bind(this)} />
				<Header/>
				<Shop page={this.state.page} ref = {(shop)=>{this.shop = shop}}/>
			</div>
		)
	}
}

export default HomePage