import React, { Component } from 'react';
import { SearchBar,WingBlank } from 'antd-mobile';
import { Icon, Grid } from 'antd-mobile';
import {getRecommendData} from "../api/jsonp"
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class Classify extends Component{
	constructor(props){
		super(props);
		this.state={
			list:[],
			name:[],
			content:"",
			jump:false,
			url:''
		}
	}
	jumpUrl(el){
		this.setState({
			url:el.data,
			jump:true
		})
	}
	componentDidMount(){
		const url = 'https://sapi.beibei.com/item/category-1.html'
		getRecommendData(url,"BeibeiItemCategoryGet").then((data)=>{
			let title=[],arr=[];
			if(data.success){
				data.main_categorys.map((items,index)=>{
					title.push(items.category_name)
					arr.push(items.subdivision_categorys.map((item,key)=>({
						icon:item.img,
						text:item.title,
						data:item.data
					})))
				})
			}
			this.setState({
				name:title,
				list:arr
			},()=>{
				console.log(this.state.list)
				this.setState({
					content:this.state.list.map((items,key)=>{
						return(
							<div key={key}>
							<header>{this.state.name[key]}</header>
							<Grid data={items} onClick={(el)=>{this.jumpUrl(el)}}></Grid>
							</div>
						)
					})
				})
			})
		})
	}
	render(){
		if(this.state.jump){
			return (
				<Redirect push to={"/product/" + this.state.url}/>
			)
		}

		return(
			<div>
				<WingBlank>
					<SearchBar placeholder="Search" maxLength={8} />
				</WingBlank>
				{this.state.content}
			</div>
		)
	}
}

export default Classify