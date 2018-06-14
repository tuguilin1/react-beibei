import React, { Component } from 'react';
import "./panel.css"
import { Icon } from 'antd-mobile';
export default class Panel extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="Panel">
				<section className="board">
					<div className="selected-img">
						<img src="https://b1.hucdn.com/upload/item/1802/07/70457798516490_800x800.jpg!250x250.webp" />
					</div>
					<div className="selected-info">
						<span className="now-price">
							￥19.90
						</span>
						<span className="selected-version">
							已选
						</span>
					</div>
					<div className="close-info">
						<Icon type="cross"></Icon>
					</div>
				</section>
			</div>
		)
	}
}