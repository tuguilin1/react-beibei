import jsonp from "jsonp"


var getBrand = function(url){
	return new Promise((resolve,reject)=>{
		jsonp(url,{"name":'BeibeiMartshowItemNewGet'},(err,data)=>{
			if(!err){
				resolve(data)
			}else{
				reject(data)
			}
		})

	} )
}


export default getBrand