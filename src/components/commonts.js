import React, { Component } from 'react';
import "./comments.css"
class Comments extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="comments">
				<img src="https://b3.hucdn.com/upload/face/1608/21/57979577629525_2400x2400.jpg!160x160.jpg" />
				<div className="user-info">
					<div className="user-name" >
					2131312
					</div>
					<div className="comments-content">
						包裹收到，迫不及待的打开，哇，好惊喜呀！包装的那么好，而且商家还送了手提袋和小女孩用的蝴蝶结发饰，太暖心了。小裤子质量也很好，虽然没有试穿，一看变是穿着合适的。必须好评！
					</div>
				</div>
			</div>
		)
	}
}

export default Comments