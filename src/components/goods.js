import React, { Component } from 'react';
import toDecimal from "../js/price"
import "./goods.css"
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";
import {getSwiperinfo} from "../redux/swiperinfo"
import {getRecommendData} from "../api/jsonp"
import LazyLoad from 'react-lazyload';
import axios from "axios"
@connect(
	null,
	{getGoodsinfo,getSwiperinfo}
)
class Goods extends Component{
	constructor(props){
		super(props)
		this.state={
			jump:false,
			id:0
		}
	}

	jumpUrl(item){
		const url = `https://sapi.beibei.com/item/rate/0-${item.iid}-1-10.html`
		getRecommendData(url,"BeibeiItemRateGet").then((data)=>{
			if(data.page){
				this.props.getGoodsinfo({
					goodsImg:item.img,
					eventId:this.props.eventid,
					iid:item.iid,
					goodsName:item.title,
					price:item.price?item.price:item.group_price,
					ori_price:item.price_ori?item.price_ori:item.origin_price,
					count:data.count,
					rate:data.count?data.favourable_comment.rate:"",
					rate_tags:data.count?data.rate_tags:"",
					rate_items:data.count?data.rate_items:[]
				})
			}
			if(window.location.pathname!=="/detail"){
				this.setState({
					jump:true
				})
			}
			
		})
		// console.log(this.props.eventid)
		// if(typeof this.props.eventid !== "undefined"){
		// 	const url2 = `/gateway/route.html`
		// 	const data={
		// 		method: 'beibei.recom.list.get',
		// 		scene_id: 'app_item_detail_bei_ma_recom',
		// 		iid: item.iid,
		// 		event_id: this.props.eventid,
		// 		uid: 0
		// 	}
		// 	axios.get(url2,{
		// 		params:data
		// 	}).then((data)=>{
		// 		let list = data.data.recom_items.map((v)=>{
		// 			return v
		// 		}).reverse()
		// 		let num = data.data.recom_items.length/3;
		// 		let arr = new Array
		// 		while(num--){

		// 			arr[num]=list.splice(0,3)
		// 		}
		// 		this.props.getSwiperinfo({
		// 			swiperData:arr
		// 		})
		// 	})
		// }

		this.setState({
			id:item.iid
		})

	}
	render(){
		if(this.state.jump){
			return <Redirect push to="/detail" />
		}

		let _data = []
		_data=this.props.data.map((items,index)=>{
			return(
				<div className="goods" key={index} onClick={()=>{this.jumpUrl(items)}}>
					<div className="image">
						<LazyLoad overflow={this.props.overflow}>
							<img src={items.img}/>
						</LazyLoad>
					</div>
					<div className="price">
						<span className="now-price">{items.price?toDecimal(items.price):toDecimal(items.group_price)}</span>
						<span className="ori-price">{items.price_ori?toDecimal(items.price_ori):toDecimal(items.origin_price)}</span>
						<span className="discount">{items.buying_info?items.buying_info:""}</span>
					</div>
					<div className="short-desc">
						{items.title}
					</div>
				</div>
			)
		})
		return(
			<div className="Goods">
				{_data}
			</div>
		)
	}
}

export default Goods