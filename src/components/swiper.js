import React, { Component } from 'react';
import axios from "axios"
import toDecimal from "../js/price"
import { Carousel, WingBlank } from 'antd-mobile';
import "./swiper.css"
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";


@connect(
	state=>state.goods,
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
		this.props.getGoodsinfo({
			goodsImg:item.img,
			eventId:this.props.event_id,
			iid:item.iid,
			goodsName:item.title,
			price:item.price?item.price:item.group_price,
			ori_price:item.price_ori?item.price_ori:item.origin_price
		})
	}
	update(){
		const url = `/gateway/route.html`
		const data={
			method: 'beibei.recom.list.get',
			scene_id: 'app_item_detail_bei_ma_recom',
			iid: this.props.iid,
			event_id: this.props.event_id,
			uid: 0
		}
		axios.get(url,{
			params:data
		}).then((data)=>{
			let list = data.data.recom_items.map((v)=>{
				return v
			}).reverse()
			let num = data.data.recom_items.length/3;
			let arr = new Array
			while(num--){

				arr[num]=list.splice(0,3)
			}
			this.setState({
				data:   <WingBlank>
		        <Carousel
		          autoplay={true}
		          infinite
		          slideWidth = {1}
		          dotActiveStyle={{color:'#ff4965'}}
		        >
		          {arr.map((val,index) => (
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
			})
		})
	}
	componentDidMount(){
		this.update()
	}
	componentWillReceiveProps(){
		this.update()
	}
	render(){
		return(
			<div>
		 	{this.state.data}
		 	</div>
		)
	}
}

export default Swiper