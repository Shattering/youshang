import {LOADDATA} from './actionTypes'

import ajax from 'utils/ajax'

export const loadDataSync= (data) =>{
   // console.log(data)
    return {
        type: LOADDATA,
        data
    }
}

export const loadDataAsync= () =>{
    return async (dispatch) =>{
        let result = await ajax(`../api/teacherMsg`)
        dispatch(loadDataSync(result))
    } 
}