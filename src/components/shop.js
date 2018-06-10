import React, { Component } from 'react';
import { Icon } from 'antd-mobile'
import {connect} from 'react-redux'
import { getData } from "../api/jsonp"
import Goods from "./goods"
import "./shop.css"
import {getShopinfo} from "../redux/shopinfo";
import { Link} from "react-router-dom";
@connect(
	null,
	{getShopinfo}
)
class Shop extends Component{
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
	jump(item){
		this.props.getShopinfo({shopName:item.brand_name,buyInfo:item.buying_info,shopImg:item.brand_logo});
	}
	handlePage(page = this.props.page){
		const url = this.props.list[page]
		getData(url,{client_info: undefined,h5_uid: undefined}).then((data)=>{
			this.setState({
				list:data.data.martshows.slice(2).map((items,index)=>{
					return(			
							<section key={index}>
								<Goods data={items[items.type].items} eventid={items[items.type].event_id}/>
							</section>
							)
				})
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

export default Shop