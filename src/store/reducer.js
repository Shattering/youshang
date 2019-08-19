import { combineReducers } from 'redux'

import wxReady from 'api/wx-api/reducer'
import {reducer as OrderList} from '../pages/ordercenter/reducer'

const reducer = combineReducers({ 
  wxReady,
  OrderList
})

export default reducer
