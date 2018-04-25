import React, { Component } from 'react';
import "./nav.css"

class Nav extends Component{
	constructor(props){
		super(props)
	}
	render(){
		let num = this.props.data.length;
		const items=[];
		while(num--){
			items.push(<div key={num}>{this.props.data[num]}</div>);
		};
		return(
			<div className="outer-container">
				<nav onClick={this.props.handleClick}>
					{items}
				</nav>
			</div>
		)
	}
}

export default Nav