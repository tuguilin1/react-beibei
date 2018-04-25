import React, { Component } from 'react';
import { Redirect} from 'react-router-dom'
import { Icon, Grid } from 'antd-mobile'
import getData from "../api/jsonp"
import Goods from "./goods"
import "./shop.css"

class Shop extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[],
			tag:"",
		}
	}
	componentWillMount(){
		this.handlePage()
	}
	jump(item){
		window.location.href = `/brand/${item}`
	}
	handlePage(page = this.props.page){
		const navObject = {
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
		const url = navObject[page]
		getData(url).then((data)=>{
			this.setState({
				list:data.martshows.map((items,index)=>{
					return(			
						<div key={index} onClick = {()=>{this.jump(items[items.type].event_id)}}>
							<header className="head">
								<img src={items[items.type].brand_logo} />
								{items[items.type].brand_name}
								<span>{items[items.type].title}</span>
								<Icon type="right" className="right"/>
							</header>
							<section>
								<Goods data={items[items.type].items}/>
							</section>
						</div>)
				})
			})
		})
	}
	render(){
		return(
			<div>
				{this.state.list}
			</div>
		)
	}
}

export default Shop