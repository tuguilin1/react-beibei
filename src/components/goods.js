import React, { Component } from 'react';
import toDecimal from "../js/price"
import "./goods.css"
class Goods extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let _data = []
		_data=this.props.data.map((items,index)=>{
			return(
				<div className="goods" key={index}>
					<img src={items.img}/>
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