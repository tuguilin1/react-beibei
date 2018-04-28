import React, { Component } from 'react';
import "./comments.css"
class Comments extends Component{
	constructor(props){
		super(props)
	}
	render(){

		let comments = this.props.list.map((item,index)=>{
			return 	<div className="comments" key={index}>
						<img src={item.avatar} />
						<div className="user-info">
							<div className="user-name" >
							{item.display_name}
							</div>
							<div className="comments-content">
								{item.comment}
							</div>
						</div>
					</div>
		})

		return(
			<div>
				{comments}
			</div>
		)
	}
}

export default Comments