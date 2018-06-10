import React, { Component } from 'react';
import { List, InputItem, Toast, Button} from 'antd-mobile';
import axios from "axios"
import "./my.css"
import PropTypes from 'prop-types';
export default class My extends Component{
	constructor(props){
		super(props);
		this.state = {
			phone:'',
			text:"登录",
			password:"",
			checkPassword:""
		}
	}
	change(){
		let changeText = this.state.text === "登录"?"注册":"登录"
		this.setState({
			text:changeText
		})
	}
	static contextTypes = {
        router: PropTypes.object.isRequired
  	};
	login(){
		axios.defaults.withCredentials=true
		if(this.state.text === "登录"){
			let {phone,password} = this.state;
			if(phone.replace(/\s/g, '').length < 11){
				Toast.info("手机号码格式不正确");
				return;
			}
			if(password.trim() == ""){
				Toast.info("请输入密码");
				return;
			}
			let param = {phone,password};
			axios.post("http://localhost:3001/users",param).then((data)=>{
				if(data.data.status){
					Toast.info(data.data.msg)
					this.context.router.history.push(`/personal/${phone}`)
				}else{
					Toast.info(data.data.msg)
				}
			});
		}else{
			let {phone,password,checkPassword} = this.state;
			if(phone.replace(/\s/g, '').length < 11){
				Toast.info("手机号码格式不正确");
				return;
			}
			if(password.trim() == ""||checkPassword.trim() == ""){
				Toast.info("请输入密码");
				return;
			}
			if(checkPassword !== password){
				Toast.info("两次输入的密码不正确");
				return
			}
			let param = {phone,password};
			axios.post("http://localhost:3001/users/register",param).then((data)=>{
				if(data.data.status){
					Toast.info(data.data.msg)
					this.setState({
						text:"登录"
					})
				}else{
					Toast.info(data.data.msg)
				}
			});
		}
	}
	onChange = (value) => {
	    this.setState({
	      phone:value
	    });
    }
    passwordChange = (value)=>{
    	this.setState({
    		password:value
    	})
    }
    checkPasswordChange = (value)=>{
    	this.setState({
    		checkPassword:value
    	})
    }
	render(){
		return(
			<div className="my">
				<List>
		          <InputItem
		            type="phone"
		            placeholder="input your phone"
		            value={this.state.phone}
		            onChange={this.onChange}
		          >手机号码</InputItem>
		         <InputItem
		            type="password"
		            placeholder="input your password"
		            value={this.state.password}
		            onChange={this.passwordChange}
		          >密码</InputItem>
		        <InputItem
		        	className={this.state.text === "登录"?"check-password":""}
		            type="password"
		            placeholder="input your password"
		            value={this.state.checkPassword}
		            onChange={this.checkPasswordChange}
		          >确认密码</InputItem>
		        </List>
		        <Button onClick = {this.login.bind(this)}>{this.state.text}</Button>
		       	<div className="other-choice">
		       		<span onClick={this.change.bind(this)}>{this.state.text==="登录"?"新用户注册":"切换登录"}</span>
		       		<span>找回密码</span>
		       	</div>
			</div>
		)
	}
} 


