import React, { Component } from 'react';
import Recommend from "./recommend"
import Nav from "./nav.js"
class Product extends Component{
	constructor(props){
		super(props);
		this.state={
			urlList:{
				"↓人气":`https://sapi.beibei.com/item/search/1-40-hot-${this.props.match.params.name}-0--.html`,
				"↑价格":`https://sapi.beibei.com/item/search/1-40-price-${this.props.match.params.name}-0--.html`
			},
			page:""
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		})
	}
	render(){
		return(
			<div>
				<Nav data={Object.keys(this.state.urlList)} handleClick = {this.handleClick.bind(this)} />
				<Recommend page={this.state.page} eventid="" list={this.state.urlList} param="BeibeiItemSearch"/>
			</div>
		)
	}

}


export default Product