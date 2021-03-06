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
  getLocation() {
    if(this.props.wxReady === 'false'){
      Toast.fail('wx is not ready', 1);
      return ;
    }
    window.wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: (res)=>{
        const BMap = window.BMap
        var point = new BMap.Point(res.longitude,res.latitude);
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function (res) {
          alert(JSON.stringify(res))
        })
      }
    });
  }

  Location() {
    if(this.props.wxReady === 'false'){
      Toast.fail('wx is not ready', 1);
      return ;
    }
    window.wx.getLocation({
      type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
      success: (res)=>{
        const BMap = window.BMap
        var point = new BMap.Point(res.longitude,res.latitude);
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function (res) {
          alert(JSON.stringify(res))
        })
      }
    });
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

  componentDidUpdate() {
    console.log("update了哦" + this.props.wxReady)
    this.Location()
  }
  componentDidMount() {
    this.props.isWxReady()
  }
}

export default connect(mapState,mapDispatch)(withRouter(IndexContainer))
