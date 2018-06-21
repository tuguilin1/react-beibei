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
			page:"童装",
			nav:{
				"今日特卖":"iconfont icon-icon019",
				"拼团":"iconfont icon-pintuan",
				"购物车":"iconfont icon-gouwuche",
				"我的":"iconfont icon-home"}
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		})
	}

	render(){
		const navList = this.props.data||["童装","母婴","鞋包","居家","美妆","美食","进口"].reverse();
		const List =this.props.list||{
			"童装":"/channel/7702-1-dress-1000.html",
			"母婴":"/channel/7702-1-babythings-1000.html",
			"鞋包":"/channel/7702-1-shoes_bag-1000.html",
			"居家":"/channel/7702-1-house-1000.html",
			"美妆":"/channel/7702-1-beauty-1000.html",
			"美食":"/channel/7702-1-food-1000.html",
			"女装":"/channel/7702-1-women_dress-1000.html",
			"进口":"/channel/7702-1-oversea-1000.html"
		}
		return(
			<div>
				<Link to="/Classify"><div className="search"><Icon type="search" /></div></Link>
				<Nav data={navList} handleClick = {this.handleClick.bind(this)} />
				<Header/>
				<Shop page={this.state.page} list={List}/>
				<Footer nav={this.state.nav}/>
			</div>
		)
	}
}

export default HomePage