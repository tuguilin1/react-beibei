import React, { Component } from 'react';
import Nav from "./nav"
import Recommend from "./recommend"
import Header from "./header"


export default class groupBuying extends Component{
	constructor(props){
		super(props)
		this.state={
			page:"育婴",
			urlList:{
				"育婴":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-momthings-0.html",
				"童装":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-children_wear-0.html",
				"女装":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-dress-0.html",
				"玩具":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-toy-0.html",
				"美妆":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-beauty-0.html",
				"居家":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-house-0.html",
				"食品":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-fooddrink-0.html",
				"鞋包":"https://sapi.beibei.com/item/fightgroup/1-40-today_group-shoes_bag-0.html",
			}
			
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
				<Nav data={Object.keys(this.state.urlList).reverse()} handleClick = {this.handleClick.bind(this)} />
				<Header title="今日最热"/>
				<Recommend page={this.state.page} eventid={this.props.eventId} list={this.state.urlList} param="BeibeiFightgroupItemGet"/>
			</div>
		)
	}
}