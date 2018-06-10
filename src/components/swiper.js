import React, { Component } from 'react';
import axios from "axios"
import toDecimal from "../js/price"
import { Carousel, WingBlank } from 'antd-mobile';
import "./swiper.css"
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";
import {getRecommendData} from "../api/jsonp"

@connect(
	state=>state.swiper,
	{getGoodsinfo}
)

class Swiper extends Component{
	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}
	jumpUrl(item){
		const url = `https://sapi.beibei.com/item/rate/0-${item.iid}-1-10.html`
		getRecommendData(url,"BeibeiItemRateGet").then((data)=>{
			if(data.page){
				this.props.getGoodsinfo({
					goodsImg:item.img,
					eventId:this.props.event_id,
					iid:item.iid,
					goodsName:item.title,
					price:item.price?item.price:item.group_price,
					ori_price:item.price_ori?item.price_ori:item.origin_price,
					count:data.count,
					rate:data.favourable_comment.rate?data.favourable_comment.rate:"",
					rate_tags:data.rate_tags,
					rate_items:data.rate_items
				})
			}
			
		})
	}
	render(){
		return(
			<div>
		 		<WingBlank>
			        <Carousel
			          autoplay={true}
			          infinite
			          slideWidth = {1}
			          dotActiveStyle={{color:'#ff4965'}}
			        >
			          {this.props.swiperData.map((val,index) => (
			          	<a  key={index}>
			          			<div className="reco-swiper">
			          			{val.map((item,k)=>(
				          			<div className="reco-goods" key={k} onClick={()=>{this.jumpUrl(item)}}>
				          				<div className="reco-img">
				          					<img src={item.img} />
				          				</div>
				          				<div className="reco-name">
				          					{item.title}
				          				</div>
				          				<div className="reco-price">
				          					{toDecimal(item.price)}
				          				</div>
				          			</div>
			          			))}
			          			</div>
			          	</a>
			          ))}
			        </Carousel>
			    </WingBlank>
		 	</div>
		)
	}
}

export default Swiper