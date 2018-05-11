import React, { Component } from 'react'
import { Icon, Grid } from 'antd-mobile'
import "./footer.css"
class Footer extends Component{
	constructor(props){
		super(props)
		this.state={
			data:"",
			len:4,
			num:0
		}
	}
	handleClick(event){
		// if(event.target.children[0]){
		// 	console.log(event.target.children[0])
		// }else{
		// 	console.log(event.target.parentNode.)
		// }
		this.setState({
					num:event.target.children[0]?event.target.children[0].id:event.target.parentNode.children[0].id
				},()=>{this.update()})
		

	}
	update(){
	    this.setState({
		 	data: Object.keys(this.props.nav).map((item,key) => ({
				    icon: (<div  className={this.state.num==key?"nav-active":""} id={key} ><span className={this.props.nav[item]}/></div>),
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
			<footer onClick={this.handleClick.bind(this)}>
				<Grid itemStyle={{height:"4rem"}}  data={this.state.data} columnNum={this.state.len}/>
			</footer>
		)
	}
}

export default Footer