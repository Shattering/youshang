import {GETLOCATION} from './actionTypes'

export const getLocationSync= (res) =>{
   // console.log(res)
    return {
        type: GETLOCATION,
        res
    }
}

export const getLocationAsync= () =>{
    return async (dispatch) =>{
        let wx = window.wx
        wx.getLocation({
          type: 'wgs84', 
          success: function (res) {
        dispatch(getLocationSync(res))
          }
          });        
    } 
}