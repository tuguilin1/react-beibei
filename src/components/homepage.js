import React, { Component } from 'react';
import Header from "./header"
import Nav from "./nav"
import Shop from "./shop"
import Footer from "./footer"
import { Icon } from 'antd-mobile';
import { Link} from "react-router-dom";
class HomePage extends Component{
	constructor(props){
		super(props)
		this.state = {
			page:"推荐",
			nav:{
				"今日特卖":"iconfont icon-icon019",
				"拼团":"iconfont icon-icon019",
				"购物车":"iconfont icon-icon019",
				"我的":"iconfont icon-icon019"}
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		})
	}

	render(){
		const navList = this.props.data||["推荐","童装","童鞋","婴童用品","女包","鞋包","居家","美妆","美食"].reverse();
		const List =this.props.list||{
			"推荐":"https://sapi.beibei.com/martshow/new/1-1.html",
			"童装":"https://sapi.beibei.com/martshow/channel/1-dress---0.html",
			"童鞋":"https://sapi.beibei.com/martshow/channel/1-shoes---0.html",
			"婴童用品":"https://sapi.beibei.com/martshow/channel/1-daily_goods---0.html",
			"女包":"https://sapi.beibei.com/martshow/channel/1-woman_dress---0.html",
			"鞋包":"https://sapi.beibei.com/martshow/channel/1-woman_shoes_bags---0.html",
			"居家":"https://sapi.beibei.com/martshow/channel/1-house---0.html",
			"美妆":"https://sapi.beibei.com/martshow/channel/1-beauty---0.html",
			"美食":"https://sapi.beibei.com/martshow/channel/1-food---0.html"
		}
		return(
			<div>
				<Link to="/Classify"><div className="search"><Icon type="search" /></div></Link>
				<Nav data={navList} handleClick = {this.handleClick.bind(this)} />
				<Header/>
				<Shop page={this.state.page} list={List} param={this.props.param}/>
				<Footer nav={this.state.nav}/>
			</div>
		)
	}
}

export default HomePage