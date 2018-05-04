const SWIPER_INFO="SWIPER_INFO"

const initState={
	swiperData:[]
}


export function swiper(state = initState,action){
	switch(action.type){
		case SWIPER_INFO:
			return Object.assign({},{
				swiperData:action.data.swiperData
			})
		default:
			return state
	}

}


export function swiperinfo(data){
	return {type:SWIPER_INFO,data:data}
}


export function getSwiperinfo(data){
	return dispath =>{
		dispath(swiperinfo(data))
	}
}