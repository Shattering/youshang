import React,{Component} from 'react'
import OrderCenterUI from './OrderCenterUI'
import {OrderHome} from './StyledOrderCenter'
import { TabBar } from 'antd-mobile';
import Header from '../../../components/header/Header'
import { connect } from 'react-redux'
import './OrderCenter.css'
import {loadDataAsync} from '../actionCreator'



const mapState = state => ({
  tFList: state.OrderList.tFList,//老师订单 包含状态为3的已完成订单
  tUFList: state.OrderList.tUFList,//老师订单 包含带完成订单2和评价订单1
  sFList: state.OrderList.SFList, //学生订单 包含状态为3的已完成订单
  sUFList: state.OrderList.SUFList //学生订单  包含带完成订单2和评价订单1
})

const mapDispatch = (dispatch) => ({
  loadData() {
    dispatch(loadDataAsync())
  }
})

class OrderCenterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tocompleted',
      hidden: false,
      fullScreen: false,
      tTDList : [
        {
          "oid": 19,
          "starttime": "2019-08-07 08:30:33",
          "endtime": "2019-08-07 10:30:00",
          "classaddress": "朝阳区",
          "content": "物理",
          "price": 150.0,
          "remark": "找经验丰富的物理老师",
          "teacherid": 1,
          "studentid": null,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 2,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
        {
          "oid": 20,
          "starttime": "2019-08-07 08:30:33",
          "endtime": "2019-08-07 10:30:00",
          "classaddress": "朝阳区",
          "content": "物理",
          "price": 150.0,
          "remark": "找经验丰富的物理老师",
          "teacherid": 1,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 2,
          "teacher": null,
          "student": null,
          "ordertype": 1
        }
      ], //老师待完成订单
      tDList : [
        {
          "oid": 1,
          "starttime": "2019-06-26 10:00:00",
          "endtime": "2019-08-02 12:00:00",
          "classaddress": "北科",
          "content": "语文",
          "price": 120.0,
          "remark": "好好学习,天天向上",
          "teacherid": 1,
          "studentid": 1,
          "studentevaluate": "很棒的老师",
          "teacherevaluate": "学生聪明伶俐",
          "orderstatic": 3,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
        {
          "oid": 17,
          "starttime": "2019-08-07 15:00:00",
          "endtime": "2019-08-07 18:00:00",
          "classaddress": "昌平区",
          "content": "语文",
          "price": 150.0,
          "remark": "找经验丰富的语文老师",
          "teacherid": 1,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 3,
          "teacher": null,
          "student": null,
          "ordertype": 1
        }
      ], //老师已完成订单
      tAList : [
        {
          "oid": 4,
          "starttime": "2019-08-15 19:32:56",
          "endtime": "2019-08-15 20:33:03",
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": 1,
          "studentid": 1,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 1,
          "teacher": null,
          "student": null,
          "ordertype": 2
        },
        {
          "oid": 13,
          "starttime": "2019-08-07 08:00:00",
          "endtime": "2019-08-07 10:00:00",
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "有三年教数学的经验",
          "teacherid": 1,
          "studentid": null,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 1,
          "teacher": null,
          "student": null,
          "ordertype": 2
        },
      ], //老师评价订单
      sTDList : [
        {
          "oid": 6,
          "starttime": null,
          "endtime": null,
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": null,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 2,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
        {
          "oid": 9,
          "starttime": null,
          "endtime": null,
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": null,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 2,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
      ], //学生带完成订单
      sDList : [
        {
          "oid": 7,
          "starttime": null,
          "endtime": null,
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": null,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 3,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
        {
          "oid": 10,
          "starttime": "2019-05-29 08:00:00",
          "endtime": "2019-08-07 10:00:00",
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": null,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 3,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
      ],//学生完成订单
      sAList : [
        {
          "oid": 8,
          "starttime": null,
          "endtime": null,
          "classaddress": "昌平区",
          "content": "数学",
          "price": 120.0,
          "remark": "找个有耐心的老师",
          "teacherid": null,
          "studentid": 2,
          "studentevaluate": null,
          "teacherevaluate": null,
          "orderstatic": 1,
          "teacher": null,
          "student": null,
          "ordertype": 1
        },
      ], //学生评价订单
    };
  }


  // 分离数据 2-待完成  3-已完成  1-评价
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.tFList.data) {
      return {
        tTDList : nextProps.tUFList.data.filter(item => item.orderstatic == 2),
        tDList : nextProps.tFList.data.filter(item => item.orderstatic == 3),
        tAList : nextProps.tUFList.data.filter(item => item.orderstatic == 1),
        sTDList : nextProps.sUFList.data.filter(item =>item.orderstatic == 2),
        sDList : nextProps.sFList.data.filter(item => item.orderstatic == 3),
        sAList : nextProps.sUFList.data.filter(item => item.orderstatic == 1)
      }
    }

    return null
  }


  render() {
    // console.log(this.state.tTDList,this.state.tDList,this.state.tAList,
    //   this.state.sTDList,this.state.sDList,this.state.sAList);
    return (
      <OrderHome>
        <Header name = '订单中心'>
        </Header>
        <div style={ { height: '100%', width: '100%' } }>
        <TabBar
          unselectedTintColor="#5e5e5e"
          tintColor="#5d83fe"
          barTintColor="#f9f8f9"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
          <TabBar.Item
            selected={this.state.selectedTab === 'tocompleted'}
            title="待完成"
            key="1"
            icon={<div style={{
              width: '0',
              height: '0'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '0',
              height: '0'
            }}
            />
          }
            onPress={() => {
              this.setState({
                selectedTab: 'tocompleted',
              });
            }}
            data-seed="logId"
          > 
          {/* 向渲染组件中传递参数是需要进行条件参数的判断是老师还是学生 */}
           <OrderCenterUI list={this.state.tTDList} goto={this.goto.bind(this)}></OrderCenterUI>
          </TabBar.Item>
          <TabBar.Item
            title="已完成"
            key="2"
            icon={<div style={{
              width: '0',
              height: '0'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '0',
              height: '0'
            }}
            />
          }
            selected={this.state.selectedTab === 'completed'}
            onPress={() => {
              this.setState({
                selectedTab: 'completed',
              });
            }}
            data-seed="logId1"
          >
           <OrderCenterUI list={this.state.tDList} goto={this.goto.bind(this)}></OrderCenterUI>
          </TabBar.Item>
          <TabBar.Item
            title="评价"
            key="3"
            icon={<div style={{
              width: '0',
              height: '0'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '0',
              height: '0'
            }}
            />
          }
            selected={this.state.selectedTab === 'evaluate'}
            onPress={() => {
              this.setState({
                selectedTab: 'evaluate',
              });
            }}
            data-seed="logId2"
          >
           <OrderCenterUI list={this.state.tAList} goto={this.goto.bind(this)}></OrderCenterUI>
          </TabBar.Item>
          </TabBar>
          </div>
      </OrderHome>
    )
  }

  componentDidMount(){
    this.props.loadData()
  }
  goto(res){
    this.props.history.push('/order',{item : res})
  }
  // change(data){
  //   var str = data;
  //   var reg = /(\d{4})\-(\d{2})\-(\d{2})/;
  //   return str.replace(reg,"$1年$2月$3日");
  // }
}

export default connect(mapState,mapDispatch)(OrderCenterContainer)