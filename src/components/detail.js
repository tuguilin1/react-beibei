import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Icon } from 'antd-mobile';
import { Tag } from 'antd-mobile';
import Comments from "./commonts"
import axios from "axios"
import "./detail.css"
import getData from "../api/jsonp"
import toDecimal from "../js/price"
@connect( state=>state.goods )
class Detail extends Component{
	constructor(props){
		super(props)
		this.state={
			goods:""
		}
	}

	componentDidMount(){
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
							<Comments/>
							<Comments/>
						</div>
					</div>
			})
		})
	}

	render(){
		return(
			<div>
				{this.state.goods}
			</div>
		)
	}

}

export default Detail