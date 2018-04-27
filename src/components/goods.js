import React, { Component } from 'react';
import toDecimal from "../js/price"
import "./goods.css"
import { Link,Redirect } from "react-router-dom";
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";

@connect(
	null,
	{getGoodsinfo}
)
class Goods extends Component{
	constructor(props){
		super(props)
		this.state={
			jump:false
		}
	}

	jumpUrl(item){
		this.props.getGoodsinfo({
			goodsImg:item.img,
			eventId:this.props.eventid,
			iid:item.iid,
			goodsName:item.title,
			price:item.price,
			ori_price:item.price_ori
		})

		this.setState({
			jump:true
		})
	}
	render(){
		if(this.state.jump){
			return <Redirect push to="/detail" />;
		}

		let _data = []
		_data=this.props.data.map((items,index)=>{
			return(
				<div className="goods" key={index} onClick={()=>{this.jumpUrl(items)}}>
					<div className="image">
						<img src={items.img}/>
					</div>
					<div className="price">
						<span className="now-price">{toDecimal(items.price)}</span>
						<span className="ori-price">{toDecimal(items.price_ori)}</span>
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