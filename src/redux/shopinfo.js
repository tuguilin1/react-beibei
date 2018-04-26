
const SHOP_INFO = "SHOP_INFO"

const initState = {
	shopName:"1",
	buyInfo:"2",
	shopImg:'3'
}

export function shop(state = initState,action){
	switch(action.type){
		case SHOP_INFO:
			console.log(2)
			return action.data
		default:
			return state
	}

}


export function shopinfo(data){
	return {type:SHOP_INFO,data:data}
}


export function getShopinfo(data){
	return dispath =>{
		dispath(shopinfo(data))
	}
}