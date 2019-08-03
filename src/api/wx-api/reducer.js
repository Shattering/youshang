import { WXAPI } from './actionTypes'

const wxReady = 'false'
const reducer = ( state = wxReady ,action ) => {
  switch (action.type) {
    case WXAPI:
      return action['data']
  
    default:
      return state
  }
}
export default reducer