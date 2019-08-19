import { LOADDATA } from './actionTypes'

import http from 'utils/ajax'

// 同步加载数据
export const loadDataSync = (tFData,tUFData,sFData,SUFData) => {
  return {
    type: LOADDATA,
    tFData,
    tUFData,
    sFData,
    SUFData
  }
}

// 异步从后端请求数据(添加条件判断到底加载那个请求)
export const loadDataAsync = () => {
  return async (dispatch) => {
    let tFData = await http('http://120.55.44.34/teaFinishedOrder?teacherid=1')
    let tUFData = await http('http://120.55.44.34/teaUnFinishedOrder?teacherid=1')
    let sFData = await http('http://120.55.44.34/stuFinishedOrder?studentid=2')
    let SUFData = await http('http://120.55.44.34/stuUnFinishedOrder?studentid=2')
    // console.log(result);
    dispatch(loadDataSync(tFData,tUFData,sFData,SUFData))
  }
}