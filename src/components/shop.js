import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Icon } from 'antd-mobile'
import {connect} from 'react-redux'
import { getData } from "../api/jsonp"
import Goods from "./goods"
import "./shop.css"
import {getShopinfo} from "../redux/shopinfo";
import { Link} from "react-router-dom";
import { PullToRefresh } from 'antd-mobile';
@connect(
	null,
	{getShopinfo}
)
class Shop extends Component{
	constructor(props){
		super(props)
		this.state = {
			list:[],
			tag:"",
			refreshing: false,
     		down: true,
     		height: document.documentElement.clientHeight,
     		index:1
		}
		this.handlePage.bind(this)
	}
	componentWillReceiveProps(nextprops){
		this.setState({
			list:[],
			index:1
		})
		this.handlePage(nextprops.page)
	}
	componentDidMount(){
		this.handlePage()
		const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    	setTimeout(() => this.setState({
     	 	height: hei,
    	}), 0);
	}
	jump(item){
		this.props.getShopinfo({shopName:item.brand_name,buyInfo:item.buying_info,shopImg:item.brand_logo});
	}
	handlePage(page = this.props.page){
		console.log(page)
		let url =this.props.list[page].split(""),arr=[];
		url[14]=this.state.index
		console.log(url.join(""))
		getData(url.join(""),{client_info: undefined,h5_uid: undefined}).then((data)=>{
			this.setState({
				list:arr.concat(this.state.list,data.data.martshows.slice(2)),
				index:this.state.index+1
			})
		})
	}
	render(){
		return(
			<div>
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
		  		    {this.state.list.map((items,index)=>{
						return(			
								<section key={index}>
									<Goods data={items[items.type].items} eventid={items[items.type].event_id} overflow={true}/>
								</section>
							)
					})}
				    </PullToRefresh>
		
			</div>
		)
	}
}

export default Shop