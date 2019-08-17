import { GETLOCATION } from './actionTypes'

const defaultState = {
  locationlist: {}
}

const appointmentReducer = (state = defaultState, action )=> {
     switch(action.type) {
         case GETLOCATION: 
           return {
            locationlist: action.res
            }
         default: 
           return state
     }
}

export default appointmentReducer