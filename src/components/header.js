import React, { Component } from 'react';
import "./header.css"

class Header extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<header>{typeof this.props.title === "undefined"?"今日必买 • 早晚9点特卖":this.props.title}</header>
		)
	}
}

export default Header