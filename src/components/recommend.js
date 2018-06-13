import React, { Component } from 'react';
import {connect} from 'react-redux'
import {getRecommendData} from "../api/jsonp"
import Goods from "./goods"
import "./shop.css"
import Swiper from "./swiper"
import {getSwiperinfo} from "../redux/swiperinfo";
// import { Link} from "react-router-dom";
@connect(
	null,
	{getSwiperinfo}
)
class Recommend extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[],
			tag:"",
			items:""
		}
		this.handlePage.bind(this)
	}
	componentDidMount(){
		this.handlePage()
	}
	componentWillReceiveProps(nextprops){
		this.setState({
			list:[]
		})
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
		getRecommendData(url,param).then((data)=>{
			if(typeof data.hot_datas !=="undefined"){
					let list = data.hot_datas.hot_items.slice(0,9).map((v)=>{
						return v
					}).reverse()
					let num = 3;
					let arr = new Array
					while(num--){

						arr[num]=list.splice(0,3)
					}
					this.props.getSwiperinfo({
						swiperData:arr
					})
			}
			if(data.martshow_items){
				this.setState({
					list:<Goods eventid={this.props.eventid} data={data.martshow_items} overflow={false}/>
				})			
			}else if(data.fightgroup_items){
				this.setState({
					list:<Goods eventid={this.props.eventid} data={data.fightgroup_items} overflow={false}/>
				})	
			}else if(data.search_items){
				this.setState({
					list:<Goods eventid={this.props.eventid} data={data.search_items} overflow={false}/>
				})
			}

		})
	}
	render(){
		return(
			<div>
				<Swiper ></Swiper>
				{this.state.list}
			</div>
		)
	}
}

export default Recommend