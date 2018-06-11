import React, { Component } from 'react';
import "./rank_goods.css"
import toDecimal from "../js/price"
export default class Rankgoods extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let data = this.props.data
		return(
			<div className="rank-goods">
				<div className="rank-goods-img">
					<img src="https://b1.hucdn.com/upload/item/1805/30/93371005672821_800x800.jpg!320.webp" />
				</div>
				<div className="rank-goods-info">
					<p className="rank-goods-name">{data.title}</p>
					<p className="rank-goods-tag"><span>{data.bubble}</span></p>
					<p className="rank-goods-buying">
						<span className="ori-price">{toDecimal(data.origin_price)}</span>
						<span>{data.buying_info}</span>
					</p>
					<p className="rank-goods-buying rank-goods-buying2">
						<span className="now-price">{toDecimal(data.price)}</span>
						<span className="start-group">去开团</span>
					</p>
				</div>
			</div>
		)
	}
}