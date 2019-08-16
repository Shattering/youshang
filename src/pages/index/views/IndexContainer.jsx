import React,{Component} from 'react'
import IndexUI from './IndexUI'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { wxapiAsync } from 'api/wx-api/actionCreator'
import { Toast } from 'antd-mobile';  


const mapState = (state) => ({
  wxReady: state.wxReady
})
const mapDispatch = (dispatch) => ({
  isWxReady() {
    dispatch(wxapiAsync())
  }
})


class IndexContainer extends Component {
  constructor(props) {
    super(props);
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    this.state = {
      currentIndex : 0,
      type: this.props.location.state ? this.props.location.state.type : localStorage.type
    };
    this.routes = [
      {
        path:'/home',
        icon:'&#xe61e;',
        name:'首页'
      },
      {
        path:'/timetable',
        icon:'&#xe651;',
        name:'课程表'
      },
      {
        path:'/message',
        icon:'&#xe600;',
        name:'消息'
      },
      {
        path:'/mine',
        icon:'&#xe608;',
        name:'我的'
      },
    ]
    this.changeRoute = this.changeRoute.bind(this);
  }
  changeRoute(currentIndex,path) {
    this.setState({
      currentIndex
    });
    this.props.history.push(`/index${path}`)
  }

  componentWillMount(){
    let url = window.location.pathname
    this.routes.map((item,index) => {
      if(url === item.path){
        this.setState({
          currentIndex : index
        })
      }
      return 0;
    })
  }

  render() {
    return (
      <IndexUI 
        type = {this.state.type}
        routes = { this.routes }
        currentIndex = { this.state.currentIndex }
        changeRoute = { this.changeRoute }
      ></IndexUI>
    )
  }

  getLocation() {
    console.log(this.props.wxReady)
    if(this.props.wxReady == 'false'){
      Toast.fail('wx is not ready', 1);
      return ;
    }
    window.wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: function (res) {
        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
        var speed = res.speed; // 速度，以米/每秒计
        var accuracy = res.accuracy; // 位置精度
        console.log(res)
        return res
      }
    });
  }

  async componentDidMount() {
    this.props.isWxReady()
    // let res = await this.getLocation()
    // console.log(res)
  }
}

export default connect(mapState,mapDispatch)(withRouter(IndexContainer))
