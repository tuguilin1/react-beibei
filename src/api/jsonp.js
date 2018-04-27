import jsonp from "jsonp"


var getData = function(url,param=""){
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


export default getData