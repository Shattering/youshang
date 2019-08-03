import React,{Component} from 'react'
import IndexUI from './IndexUI'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { wxapiAsync } from 'api/wx-api/actionCreator'

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
    };
    this.routes = [
      {
        path:'/',
        img:'images/syw@2x.jpg',
        imgActive:'images/syd@2x.jpg',
        name:'首页'
      },
      {
        path:'/timetable',
        img:'images/kcw@2x.jpg',
        imgActive:'images/kcd@2x.jpg',
        name:'课程表'
      },
      {
        path:'/message',
        img:'images/xxw@2x.jpg',
        imgActive:'images/xxd@2x.jpg',
        name:'消息'
      },
      {
        path:'/mine',
        img:'images/wdw@2x.jpg',
        imgActive:'images/wdd@2x.jpg',
        name:'我的'
      },
    ]
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(currentIndex,path) {
    this.setState({
      currentIndex
    });
    this.props.history.push(path)
  }

  render() {
    return (
      <IndexUI 
        routes = { this.routes }
        currentIndex = { this.state.currentIndex }
        changeRoute = { this.changeRoute }
      ></IndexUI>
    )
  }

  componentDidMount() {
    this.props.isWxReady()
  }
}

export default connect(null,mapDispatch)(withRouter(IndexContainer))