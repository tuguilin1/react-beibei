import jsonp from "jsonp"
import axios from "axios"

var getRecommendData = function(url,param=""){
	return new Promise((resolve,reject)=>{
		let  name
		/channel/i.test(url)?name = "BeibeiMartshowChannelGet":name = 'BeibeiMartshowNewGet'
		if(param){
			name = param
		}
		const options = {name}
		jsonp(url,options,(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(data)
			}
		})

	} )
}

var getData = function(url,param={}){
	return new Promise((resolve,reject)=>{
		axios.get(url,param).then((data)=>{
			resolve(data)
		})

	} )
}


export {getData,getRecommendData}