import React, { Component } from 'react';
import "./personal.css"
import { List } from 'antd-mobile';
export default class Personal extends Component{
	constructor(props){
		super(props)

	}
	componentDidMount(){
		
	}
	render(){
		const Item = List.Item;
		return(
			<div className="Personal">
				<header>
					<div className="person-info">
						<div className="person-avatar">
						</div>
						<div className="person-account">
							<span>{this.props.match.params.phone}</span>
							<span>宝宝年龄:0岁</span>
						</div>

					</div>
				</header>
				<div className="enter-box">
					<ul>
						<li>
							<i className="iconfont icon-icon019"></i>
							<span>收藏</span>
						</li>
						<li>
							<i className="iconfont icon-icon019"></i>
							<span>我的拼团</span>
						</li>
						<li>
							<i className="iconfont icon-icon019"></i>
							<span>我的足迹</span>
						</li>
					</ul>
				</div>
				<div className="activity">
					<img src="https://h0.hucdn.com/images/201735/4be905a3889d5bbd_750x88.jpg" />
				</div>
				<List className="my-list">
					<Item arrow="horizontal" onClick={() => {}}>完善个人信息</Item>
			        <Item arrow="horizontal" onClick={() => {}}>我的订单</Item>
			        <Item arrow="horizontal" onClick={() => {}}>我的购物车</Item>
			        <Item arrow="horizontal" onClick={() => {}}>收回地址</Item>
			    </List>
			</div>
		)
	}
}