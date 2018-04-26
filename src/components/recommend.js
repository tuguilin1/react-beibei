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
		console.log(nextprops.page)
		this.handlePage(nextprops.page)
	}
	// jump(item){
	// 	this.props.getShopinfo({shopName:item.brand_name,buyInfo:item.buying_info,shopImg:item.brand_logo});
	// }
	handlePage(page = this.props.page){
		const url = this.props.list[page]
		getData(url,this.props.param).then((data)=>{
			this.setState({
				list:<Goods data={data.martshow_items}/>
			})
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