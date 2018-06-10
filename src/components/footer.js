import React, { Component } from 'react'
import { Icon, Grid } from 'antd-mobile'
import "./footer.css"
import PropTypes from 'prop-types';
import axios from "axios"
axios.defaults.withCredentials=true
class Footer extends Component{
	constructor(props){
		super(props)
		this.state={
			data:"",
			len:4,
			text:"今日特卖"
		}
	}
	static contextTypes = {
        router: PropTypes.object.isRequired
  	};
	handleClick(event){

		let currentText = event.text;
		this.setState({
			text:currentText
		},()=>{
			this.update()
		})
		// console.log(this.context.router)
		switch(currentText){
			case "今日热卖":
				this.context.router.history.push("/index");
			case "我的":
				axios.post("http://127.0.0.1:3001/users").then((data)=>{
					if(data.data.status){
						this.context.router.history.push("/my")
					}else{
						this.context.router.history.push("/personal")
					}
				})
				
		}

	}
	update(){
	    this.setState({
		 	data: Object.keys(this.props.nav).map((item,key) => ({
				    icon: (<div  className={this.state.text===item?"nav-active":""} id={key} ><span className={this.props.nav[item]}/></div>),
				    text: item,
				  })),
		 	len:Object.keys(this.props.nav).length
		 })

	}
	componentDidMount(){
		this.update()
	}
	render(){
		return(
			<footer >
				<Grid onClick={this.handleClick.bind(this)} itemStyle={{height:"4rem"}}  data={this.state.data} columnNum={this.state.len}/>
			</footer>
		)
	}
}

export default Footer