import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';
import Groupbuying from "./group_buying"
import "./group_nav.css"
import Salerank from "./sale_rank"
export default class Groupnav extends Component{
	constructor(props){
		super(props)
		this.state={
			hidden:false,
			selectedTab:"tab1"
		}
	}

	render(){
		return(
		<div>
	        <TabBar
	          unselectedTintColor="#949494"
	          tintColor="#ff4965"
	          barTintColor="white"
	          hidden={this.state.hidden}

	        >
	          <TabBar.Item
	            title="今日热团"
	            key="Today"
	            icon={<div style={{
	              width: '22px',
	              height: '22px',
	              background: 'url(https://h0.hucdn.com/open/201627/9750033a3fb05ef8_48x48.png) center center /  21px 21px no-repeat' }}
	            />
	            }
	            selectedIcon={<div style={{
	              width: '22px',
	              height: '22px',
	              background: 'url(https://h0.hucdn.com/open/201627/a25e1fae2b3cd4bc_48x48.png) center center /  21px 21px no-repeat' }}
	            />
	            }
	            selected={this.state.selectedTab === 'tab1'}
	            onPress={() => {
	              this.setState({
	                selectedTab: 'tab1',
	              });
	            }}
	            data-seed="logId"
	          >
	          <Groupbuying/>
	          </TabBar.Item>
	          <TabBar.Item
	            icon={
	              <div style={{
	                width: '22px',
	                height: '22px',
	                background: 'url(https://h0.hucdn.com/open/201627/137fa70e91fdcda7_48x48.png) center center /  21px 21px no-repeat' }}
	              />
	            }
	            selectedIcon={
	              <div style={{
	                width: '22px',
	                height: '22px',
	                background: 'url(https://h0.hucdn.com/open/201627/8180071b9a2dbbb4_48x48.png) center center /  21px 21px no-repeat' }}
	              />
	            }
	            title="热销榜"
	            key="sell"
	            selected={this.state.selectedTab === 'tab2'}
	            onPress={() => {
	              this.setState({
	                selectedTab: 'tab2',
	              });
	            }}
	            data-seed="logId1"
	          >
	          <Salerank/>
	          </TabBar.Item>
	          <TabBar.Item
	            icon={
	              <div style={{
	                width: '22px',
	                height: '22px',
	                background: 'url(https://h0.hucdn.com/open/201650/3102e594de6760b5_48x48.png) center center /  21px 21px no-repeat' }}
	              />
	            }
	            selectedIcon={
	              <div style={{
	                width: '22px',
	                height: '22px',
	                background: 'url(https://h0.hucdn.com/open/201650/dbc292918d725fbb_48x48.png) center center /  21px 21px no-repeat' }}
	              />
	            }
	            title="我的拼团"
	            key="my"
	            selected={this.state.selectedTab === 'greenTab'}
	            onPress={() => {
	              this.setState({
	                selectedTab: 'greenTab',
	              });
	            }}
	          >
	          </TabBar.Item>
       		 </TabBar>
          </div>
		)
	}
}