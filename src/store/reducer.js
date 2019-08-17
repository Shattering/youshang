import { combineReducers } from 'redux'

import wxReady from 'api/wx-api/reducer'
import {reducer as subscribelist} from 'pages/home/student/subscribe/' 
import {reducer as appointmentlist} from 'components/HomeItem/' 
const reducer = combineReducers({ 
  wxReady,
  subscribelist,
  appointmentlist
})

export default reducer
