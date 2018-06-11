import React, { Component } from 'react';
import "./sale_rank.css"
import Salegoods from "./rank_goods"
import {getRecommendData} from "../api/jsonp"


export default class saleRank extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		this.setState({
			data:this.handlePage()()
		},()=>{
			console.log(this.state.data)
		})
	}
	handlePage(){
		let index =1,arr=[]
		return async function(){
			let url=`https://sapi.beibei.com/fightgroup/hot/${index++}-20-new_hot.html`;
			let data = await getRecommendData(url,"BeibeiFightgroupHotGet")

			if(typeof data.count !== "undefined"){
				arr = arr.concat(data.fightgroup_items)
				console.log(arr)
				return arr
			}else{
				return []
			}
		}
	}
	render(){
		console.log(this.state.data)
		return(
			<div className="sale-rank">
				<header>
					<div className="top"></div>
				</header>
			</div>
		)
	}
} 