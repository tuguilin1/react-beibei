import React, { Component } from 'react';
import toDecimal from "../js/price"
import "./goods.css"
import { Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";

@connect(
	state=>state.goods,
	{getGoodsinfo}
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
		this.props.getGoodsinfo({
			goodsImg:item.img,
			eventId:this.props.eventid,
			iid:item.iid,
			goodsName:item.title,
			price:item.price?item.price:item.group_price,
			ori_price:item.price_ori?item.price_ori:item.origin_price
		})
		this.setState({
			id:item.iid
		})
		if(window.location.pathname!=="/detail"){
			this.setState({
				jump:true
			})
		}
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
						<img src={items.img}/>
					</div>
					<div className="price">
						<span className="now-price">{items.price?toDecimal(items.price):toDecimal(items.group_price)}</span>
						<span className="ori-price">{items.price_ori?toDecimal(items.price_ori):toDecimal(items.origin_price)}</span>
						<span className="discount">{items.sale_tip?items.sale_tip:""}</span>
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