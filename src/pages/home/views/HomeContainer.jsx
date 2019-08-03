import React,{Component} from 'react'
import HomeUI from './HomeUI'
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile';


const mapState = (state) => ({
  wxReady: state.wxReady
})

class HomeContainer extends Component {
  onscanQRCode() {
    console.log(this.props.wxReady)
    if(this.props.wxReady == 'false'){
      Toast.fail('wx is not ready', 1);
      return ;
    }
    window.wx.scanQRCode({
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
        document.querySelector('#text').innerHTML = result
      }
    })
  }
  render() {
    return (
      <HomeUI scanQRCode={this.onscanQRCode.bind(this)}></HomeUI>
    )
  }
}

export default connect(mapState)(HomeContainer)