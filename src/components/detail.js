import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Icon,Button } from 'antd-mobile';
import { Tag } from 'antd-mobile';
import Comments from "./commonts"
import axios from "axios"
import "./detail.css"
import getData from "../api/jsonp"
import toDecimal from "../js/price"
import Swiper from "./swiper"
import Nav from "./nav.js"
import Recommend from "./recommend"
@connect( state=>state.goods )
class Detail extends Component{
	constructor(props){
		super(props)
		this.state={
			goods:"",
			list:["9.9秒杀",'母婴','百货','童装','食品','美妆','服饰'].reverse(),
			page:"9.9秒杀",
			urlList:{
				'9.9秒杀':'https://sapi.beibei.com/fightgroup/nine_freeship/1-50-99.html',
				"母婴":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-3_5_7-1-50.html`,
				"百货":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-393_1285_1648-1-50.html`,
				"童装":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-2_1230-1-50.html`,
				"食品":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-328_1242-1-50.html`,
				"美妆":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-591-1-50.html`,
				"服饰":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-6_449_562_571_1454_1455_1472_1485_1552-1-50.html`
			}
		}
	}
	handleClick(event){
		this.setState({
			page:event.target.innerHTML
		})
	}
	update(){
		console.log(this.props.iid)
		this.setState({
			urlList:{
				'9.9秒杀':'https://sapi.beibei.com/fightgroup/nine_freeship/1-50-99.html',
				"母婴":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-3_5_7-1-50.html`,
				"百货":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-393_1285_1648-1-50.html`,
				"童装":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-2_1230-1-50.html`,
				"食品":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-328_1242-1-50.html`,
				"美妆":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-591-1-50.html`,
				"服饰":`https://sapi.beibei.com/fightgroup/item_more_by_cid/${this.props.iid}-6_449_562_571_1454_1455_1472_1485_1552-1-50.html`
			}
		})
		const url = `https://sapi.beibei.com/item/rate/0-${this.props.iid}-1-10.html`
		getData(url,"BeibeiItemRateGet").then((data)=>{
			if(data.page)
			this.setState({
				goods:<div className="detail">
						<div className="goodsImg">
							<img src={this.props.goodsImg} />
						</div>
						<div className="goods-title">
							<span className="title-tag">
							</span>
							<span className="title">
								{this.props.goodsName}
							</span>
						</div>
						<div className="goods-price">
							<span className="price">
							{toDecimal(this.props.price)}
							</span>
							<span className="ori-price">
							{toDecimal(this.props.ori_price)}
							</span>
						</div>
						<div className="ensure">
							<div className="ensure-tag">
								<Icon type="check-circle-o">
								</Icon>
								<span className="ensure-tag-text">
								全场包邮
								</span>
							</div>
							<div className="ensure-tag">
								<Icon type="check-circle-o">
								</Icon>
								<span className="ensure-tag-text">
								正品保证
								</span>
							</div>
							<div className="ensure-tag">
								<Icon type="check-circle-o">
								</Icon>
								<span className="ensure-tag-text">
								24小时发货
								</span>
							</div>
						</div>
						<div className="evaluate">
							<header>
								<span>
									买家评价({data.count})
								</span>
								<span>
									好评率({data.favourable_comment.rate})
								</span>
							</header>
							<div className="evaluate-tag">
								{data.rate_tags?data.rate_tags.map((item,index)=>{
									return <Tag key={index}>{item.name}({item.count})</Tag>
								}):""}
							</div>
						</div>
						<div>

							<Comments list={data.rate_items.slice(0,2)}/>
						</div>
						<Button>查看全部评价</Button>
						<header className="reco-goods">  大家还买了</header>
						<Swiper event_id={this.props.eventId} iid={this.props.iid} />
					</div>
			})
		})

	}
	componentWillReceiveProps(){
		this.update();
		window.scrollTo(0,0)
	}
	componentDidMount(){
		this.update()
	}

	render(){
		return(
			<div>
				{this.state.goods}

				<Nav data={this.state.list} handleClick = {this.handleClick.bind(this)}/>
				<Recommend page={this.state.page} eventid={this.props.eventId} list={this.state.urlList} param={this.state.page=="9.9秒杀"?"BeibeiFightgroupNineFreeshipGet":"BeibeiFightgroupItemMoreByCidsGet"}/>

			</div>
		)
	}

}

export default Detail