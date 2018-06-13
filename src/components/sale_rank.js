import React, { Component } from 'react';
import "./sale_rank.css"
import ReactDOM from 'react-dom'
import Salegoods from "./rank_goods"
import {getRecommendData} from "../api/jsonp"
import { PullToRefresh } from 'antd-mobile';
import {connect} from 'react-redux'
import {getGoodsinfo} from "../redux/goodsinfo";
import { Redirect } from "react-router-dom";
@connect(
	null,
	{getGoodsinfo}
)
export default class saleRank extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			refreshing: false,
     		down: true,
     		height: document.documentElement.clientHeight,
     		index:1,
     		jump:false
		}
	}
	componentDidMount(){
		this.handlePage();
		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    	setTimeout(() => this.setState({
     	 	height: hei,
    	}), 0);
	}
	async handlePage(){
			let arr = []
			let url=`https://sapi.beibei.com/fightgroup/hot/${this.state.index}-20-new_hot.html`
			let data = await getRecommendData(url,"BeibeiFightgroupHotGet")
			if(typeof data.count !== "undefined"){
				arr = arr.concat(this.state.data,data.fightgroup_items)
				this.setState({
					data:arr,
					index:this.state.index+1
				})
			}
	}
	jump(item){
		const url = `https://sapi.beibei.com/item/rate/0-${item.iid}-1-10.html`
		getRecommendData(url,"BeibeiItemRateGet").then((data)=>{
			if(data.page){
				this.props.getGoodsinfo({
					goodsImg:item.img,
					eventId:this.props.eventid,
					iid:item.iid,
					goodsName:item.title,
					price:item.price?item.price:item.group_price,
					ori_price:item.price_ori?item.price_ori:item.origin_price,
					count:data.count,
					rate:data.count?data.favourable_comment.rate:"",
					rate_tags:data.count?data.rate_tags:"",
					rate_items:data.count?data.rate_items:[]
				})
				this.setState({
					jump:true
				})
			}
			
		})
	}
	render(){
		if(this.state.jump){
			return <Redirect push to="/detail" />
		}


		return(
			<div className="sale-rank">
				<header>
					<div className="top"></div>
				</header>

			    <PullToRefresh
			     	direction="up"
			        damping={60}
			        ref={el => this.ptr = el}
			        style={{
			          height: this.state.height,
			          overflow: 'auto',
			        }}
			        refreshing={this.state.refreshing}
			        onRefresh={() => {
			        	console.log(2)
			            this.handlePage()
			            this.setState({ refreshing: true });
			            setTimeout(() => {
			              this.setState({ refreshing: false });
			            }, 1000);
			        }}
			    >
	  		   	    {this.state.data.map((item)=>{
						return <div onClick={this.jump.bind(this,item)} key={item.iid}><Salegoods data={item}   /></div>
					})}
				</PullToRefresh>
				
			</div>
		)
	}
} 