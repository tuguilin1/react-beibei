import React, { Component } from 'react';
import "./nav.css"

class Nav extends Component{
	constructor(props){
		super(props)
		this.state={
			number:this.props.data.length-1
		}
	}
	underLine(event){
		this.setState({
			number:event.target.id
		})
	}
	render(){
		let num = this.props.data.length;
		const items=[];
		while(num--){
			items.push(<div onClick={this.underLine.bind(this)} className={this.state.number==num?'active':''} id={num} key={num}>{this.props.data[num]}</div>);
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