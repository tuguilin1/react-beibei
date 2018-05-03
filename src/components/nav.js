import React, { Component } from 'react';
import "./nav.css"

class Nav extends Component{
	constructor(props){
		super(props)
	}
	underLine(event){
		console.log(event)
	}
	render(){
		let num = this.props.data.length;
		const items=[];
		while(num--){
			items.push(<div onClick={this.underLine} data-num={num} key={num}>{this.props.data[num]}</div>);
		};
		return(
			<div className="outer-container">
				<nav className={this.props.data.length>5?"long-nav":"short-nav"} onClick={this.props.handleClick}>
					{items}
				</nav>
			</div>
		)
	}
}

export default Nav