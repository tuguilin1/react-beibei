import React, { Component } from 'react';
import getBrand from '../api/getbrand'
import "./brand.css"
class Brand extends Component{
	constructor(props){
		super(props)
		this.state = {
			brandList:[]
		}
	}
	componentWillMount(){
		const url = `https://sapi.beibei.com/martshow/item/new/${this.props.match.params.name}-1-hot-0-0-0-0.html`
		getBrand(url).then((data)=>{
			this.setState({
				brandList:[
						<header>
								<img src = {data.} />
								<div className="brand-desc">
									<div className="brand-name">压力应聘</div>
									<div className="brand-sales">很多人已购</div>
								</div>
								<div className="save">
									收藏
								</div>
						</header>
						<div className="today">
							<span className="light"></span>
							<span></span>
						</div>
				]
			})
		})
	}
	render(){
		return(
			<div>
				<header>
						<img src = "https://b1.hucdn.com/upload/brand/1612/29/98937009485895_200x200.jpg!160x160.webp" />
						<div className="brand-desc">
							<div className="brand-name">压力应聘</div>
							<div className="brand-sales">很多人已购</div>
						</div>
						<div className="save">
							收藏
						</div>
				</header>
				<div className="today">
					<span className="light"></span>
					<span></span>
				</div>
			</div>
		)
	}
}

export default Brand