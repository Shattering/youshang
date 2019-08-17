import React from 'react'
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'
import HomeItemUI from './HomeItemUI'
import {connect} from 'react-redux'
import {getLocationAsync} from './actionCreator'
const mapState= state => ({  
  //把store中subscribelist.list数据放在了 props.list上
  locationlist: state.appointmentlist.locationlist
  })
  
  const mapDispatch = (dispatch) => ({
    showMap() {
          dispatch(getLocationAsync())
      }
  })

  
class HomeItem extends React.Component{
    constructor(props) {
        super(props);
        this.handletoDetail= this.handletoDetail.bind(this)
    }

   render() {
    return (
      <HomeItemUI 
      list={this.props.list.length? this.props.list: ''}
      toDetail={this.handletoDetail}
      ></HomeItemUI>
    )
   }

   componentDidMount() {
    this.bScrollLeft = new BScroll('#scroll-wrap',{
        click: true
    })
   
    // let wx = window.wx
    // wx.getLocation({
    //   type: 'wgs84', // 默认为wgs84的f7gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //   success: function (res) {
    //   var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    //   var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
    //   // var speed = res.speed; // 速度，以米/每秒计
    //   // var accuracy = res.accuracy; // 位置精度
    //   }
    //   });
   
  }
  handletoDetail(id){
    this.props.history.push(`/appointmentdetail/:${id}`)
  }
}

export default connect(mapState, mapDispatch)(withRouter(HomeItem))