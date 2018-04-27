import { combineReducers } from 'redux'
import {shop} from "./redux/shopinfo"
import {goods} from "./redux/goodsinfo"
export default combineReducers({shop,goods})