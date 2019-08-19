import { WXAPI } from './actionTypes'

export const wxapiSync = (data) => {
  return {
    type: WXAPI,
    data: data.wxReady
  }
}
export const wxapiAsync = () => {
  return async(dispatch)=>{
    let wx = window.wx
    let url = encodeURIComponent(window.location.href.split("#")[0])
    await fetch('http://99wind.com/weixin/jsapi',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({//post请求参数 
          url
        }) 
      })
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: result.appId, // 必填，公众号的唯一标识
          timestamp: result.timestamp, // 必填，生成签名的时间戳
          nonceStr: result.nonceStr, // 必填，生成签名的随机串
          signature: result.signature,// 必填，签名
          jsApiList: ["scanQRCode"] // 必填，需要使用的JS接口列表
        })

        wx.ready(function(){
          // console.log('wx is ready !')
          dispatch(wxapiSync({
            wxReady:true
          }))
        })
      })
  }
}