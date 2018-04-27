
const GOODS_INFO="GOODS_INFO"

const initState={
	goodsImg:"https://b1.hucdn.com/upload/item/1711/04/92723121612426_800x800.jpg!320x320.webp",
	eventId:1,
	iid:2,
	goodsName:"",
	price:"",
	ori_price:""
}


export function goods(state = initState,action){
	switch(action.type){
		case GOODS_INFO:
			return action.data
		default:
			return state
	}

}


export function goodsinfo(data){
	return {type:GOODS_INFO,data:data}
}


export function getGoodsinfo(data){
	return dispath =>{
		dispath(goodsinfo(data))
	}
}