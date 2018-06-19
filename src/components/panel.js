import React, { Component } from 'react';
import "./panel.css"
import toDecimal from "../js/price"
import { Icon } from 'antd-mobile';
import { List, Stepper,Button } from 'antd-mobile';
export default class Panel extends Component{
	constructor(props){
		super(props);
		this.state = {
			imgs:[],
			idMap:{},
			kvMap:{},
			allMap:{},
			img:"",
			tags:{},
			price:"￥0.00",
			val:1
		}
	}
	componentDidMount(){
		if(this.props.data !== null||this.props.data !== ""){
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
	onChange = (val) => {
    	// console.log(val);
    	let price = this.state.price;
	    price = price.slice(1);
	    price = parseInt(price)/this.state.val*val;
	    this.setState({ val });
	    
	    this.setState({
	    	price:toDecimal(price*100)
	    })
	}
	select(tag,item){
		let arr2 = {};
		this.setState({
			val:1
		})
		if(this.state.tags[item] === tag){
			arr2[item]="";
			let arr = Object.assign({},this.state.tags,arr2);
			this.setState({
				tags:arr
			})
			return;
		}

		arr2[item] = tag;

		let arr = Object.assign({},this.state.tags,arr2);
		if(Object.keys(arr).length === Object.keys(this.state.idMap).length){
			let str = "";
			Object.keys(arr).forEach((item)=>{
				str += "v"+arr[item]
			})
			if(Object.keys(this.state.allMap).includes(str)){
				this.setState({
					price:toDecimal(this.state.allMap[str].price)
				})
			}
		}
		if(Object.keys(this.state.imgs).includes(""+tag)){
			this.setState({
				img:this.state.imgs[tag]
			})
		}
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
							<img src={this.state.img===""?"https://h0.hucdn.com/open/201645/1365743f2a2dd74f_640x640.jpg":this.state.img} />
						</div>
						<div className="selected-info">
							<span className="now-price">
								{
									this.state.price
								}
							</span>
							<span className="selected-version">
								已选{Object.keys(this.state.tags).map((item)=>{
									return(
										this.state.kvMap[`v${this.state.tags[item]}`]
									)
								})}
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
						<List>
					        <List.Item
					          wrap
					          extra={
					            <Stepper
					              style={{ width: '100%', minWidth: '100px' }}
					              showNumber
					              min={1}
					              value={this.state.val}
					              onChange={this.onChange}
					            />}
					        >
					        购买数量
					        </List.Item>
					    </List>
					    <Button>确定</Button>
					</div>

				</section>

			</div>
		)
	}
}