import React, { Component } from 'react';
import { Icon, Grid } from 'antd-mobile'
import "./bottom_nav.css"
import axios from "axios"
class Bottomnav extends Component{
	constructor(props){
		super(props);
		this.state={
			data:[{
					icon:(<span className="iconfont icon-icon019"></span>),
					text:'首页'

				},{
					icon:(<span className="iconfont icon-icon019"></span>),
					text:'收藏'
				},{
					icon:(<span className="iconfont icon-icon019"></span>),
					text:'购物车'
				}]
		}
	}
	getPrice(){
		console.log(1)
		axios.get("/mroute.html",{
			params:{
				method:"beibei.item.stock.get",
				iid:this.props.iid
			}
		}).then((data)=>{
			console.log(data)
		})
	}

	render(){
		return(
			<div className="bottom-nav">
				<div className="bottom-left-nav">
					<Grid itemStyle={{height:"3rem"}}  data={this.state.data} columnNum={3}/>
				</div>
				<div className={`shopping ${this.props.color}`}>
					{this.props.msg1}
				</div>
				<div className="shopping">
					{this.props.msg2}
				</div>

			</div>
		)
	}
}

export default Bottomnav