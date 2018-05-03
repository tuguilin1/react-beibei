import React, { Component } from 'react';
// import {connect} from 'react-redux'
import getData from "../api/jsonp"
import Goods from "./goods"
import "./shop.css"
// import {getShopinfo} from "../redux/shopinfo";
// import { Link} from "react-router-dom";
// @connect(
// 	null,
// 	{getShopinfo}
// )
class Recommend extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[],
			tag:"",
		}
		this.handlePage.bind(this)
	}
	componentWillMount(){
		this.handlePage()
	}
	componentWillReceiveProps(nextprops){
		this.handlePage(nextprops.page)
	}
	// jump(item){
	// 	this.props.getShopinfo({shopName:item.brand_name,buyInfo:item.buying_info,shopImg:item.brand_logo});
	// }
	handlePage(page = this.props.page){
		let param = this.props.param;
		if(page=="9.9秒杀"){
			param ="BeibeiFightgroupNineFreeshipGet"
		}
		const url = this.props.list[page]
		getData(url,param).then((data)=>{
			if(data.martshow_items){
				this.setState({
					list:<Goods eventid={this.props.eventid} data={data.martshow_items}/>
				})			
			}else if(data.count){
				this.setState({
					list:<Goods eventid={this.props.eventid} data={data.fightgroup_items}/>
				})	
			}

		})
	}
	render(){
		return(
			<div>
				{this.state.list}
			</div>
		)
	}
}

export default Recommend