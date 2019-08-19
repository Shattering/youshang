import { LOADDATA } from './actionTypes'
const defaultState = {
  tFList: [] ,
  tUFList: [] ,
  SFList: [] ,
  SUFList: [] 
}
// 接收一个state和action返回一个新的state
const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case LOADDATA:
      return {
        tFList: action.tFData,
        tUFList: action.tUFData,
        SFList: action.sFData,
        SUFList: action.SUFData,
      }
    default: 
      return state
  }
}

export {
  reducer
} 