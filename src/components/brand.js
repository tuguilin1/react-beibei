import React, { Component } from 'react';
import getBrand from '../api/getbrand'
import "./brand.css"
import {connect} from 'react-redux'
import Goods from "./goods"
import Recommend from "./recommend"
import Nav from "./nav"
@connect(state=>state.shop)

class Brand extends Component{
	constructor(props){
		super(props)
		this.state = {
			brandList:'',
			recList:["推荐","新品","销量","价格","筛选"].reverse(),
			urlList:{
				"推荐":`https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-hot-0-0-0-0.html`,
				"新品":`https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-new-0-0-0-0.html`,
				"销量":`https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-sale_num-0-0-0-0.html`,
				"价格":`https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-price_asc-0-0-0-0.html`
			},
			page:"推荐"
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		})
	}
	componentDidMount(){
		const url = `https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-hot-0-0-0-0.html`
		getBrand(url).then((data)=>{
			this.setState({
				brandList:<Goods data={data.hot_items_info.hot_items}/>
			})
		})

	}
	render(){
		return(
			<div>
				<div className="brand">
					<header>
							<img src = {this.props.shopImg} />
							<div className="brand-desc">
								<div className="brand-name">{this.props.shopName}</div>
								<div className="brand-sales">{this.props.buyInfo}</div>
							</div>
							<div className="save">
								收藏
							</div>
					</header>
					<div className="today">
						<span className="light"></span>
						<span>今日推荐</span>
					</div>

					<section>
						{this.state.brandList}
					</section>
					<div className="today">
						<span className="light"></span>
						<span>猜你喜欢</span>
					</div>
					<Nav data={this.state.recList} handleClick = {this.handleClick.bind(this)} />
					<Recommend page={this.state.page} list={this.state.urlList} param="BeibeiMartshowItemNewGet"/>
				</div>

			</div>

		)
	}
}

export default Brand