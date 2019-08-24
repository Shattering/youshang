import { LOADDATA } from './actionTypes'

const defaultState = {
  list: {}
}

const subscribeReducer = (state = defaultState, action )=> {
     switch(action.type) {
         case LOADDATA: 
           return {
             list: action.data
            }
         default: 
           return state
     }
}

export default subscribeReducer