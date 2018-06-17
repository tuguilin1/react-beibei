import React, { Component } from 'react';
import "./panel.css"
import { Icon } from 'antd-mobile';
export default class Panel extends Component{
	constructor(props){
		super(props);
		this.state = {
			imgs:[],
			idMap:{},
			kvMap:{},
			allMap:{},
			img:"",
			tags:{}
		}
	}
	componentDidMount(){
		if(this.props.data !== null||this.props.data !== ""){
			console.log(this.props.data)
			this.setState({
				imgs:this.props.data.imgs||[],
				idMap:this.props.data.sku_id_map||{},
				kvMap:this.props.data.sku_kv_map||{},
				allMap:this.props.data.sku_stock_map||{},
			},()=>{
				console.log(Object.keys(this.state.idMap))
			})
		}

	}
	select(tag,item){
		let arr2 = {};
		arr2[item] = tag
		let arr = Object.assign({},this.state.tags,arr2);
		console.log(arr)
		this.setState({
			tags:arr
		})
	}
	render(){
		return(
			<div className="Panel">
				<section className="board">
					<div className="selected">
						<div className="selected-img">
							<img src="https://b1.hucdn.com/upload/item/1802/07/70457798516490_800x800.jpg!250x250.webp" />
						</div>
						<div className="selected-info">
							<span className="now-price">
								￥19.90
							</span>
							<span className="selected-version">
								已选
							</span>
						</div>
						<div className="close-info" onClick={this.props.closePanel}>
							<Icon type="cross"></Icon>
						</div>
					</div>
					<div className="selected-scroll">
						{Object.keys(this.state.idMap).map((item,index)=>{
							return(<div className="products" key={index}>
								<div className="tag-header">
									{this.state.kvMap[`k${item}`]}
								</div>
								<div className="products-tags">
									{this.state.idMap[item].map((tag)=>{
										return(
											<div key={tag} className={this.state.tags[item]===tag?"tags tag-active":"tags"} onClick={this.select.bind(this,tag,item)}>
												{this.state.kvMap[`v${tag}`]}
											</div>
										)
									})}
								</div>
							</div>)
						})
						}
					</div>

				</section>

			</div>
		)
	}
}