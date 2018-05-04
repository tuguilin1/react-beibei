import { combineReducers } from 'redux'
import {shop} from "./redux/shopinfo"
import {goods} from "./redux/goodsinfo"
import {swiper} from "./redux/swiperinfo"
export default combineReducers({shop,goods,swiper})