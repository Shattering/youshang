import React,{Component} from 'react'
import {
  Home
} from './StyledHome'
import { TabBar } from 'antd-mobile';
import MySwiper from 'components/swiper/views/Swiper'
import FindTeacherUI from './FindTeacherUI'
import SubscribeTeacherUI from './SubscribeTeacherUI'

class StudentHomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
      <Home>    
        <MySwiper></MySwiper>
         <div style={ { height: '100%', width: '100%' ,marginTop: '-.05rem'} }>
        <TabBar
          unselectedTintColor="#5e5e5e"
          tintColor="#5d83fe"
          barTintColor="#f9f8f9"
          hidden={this.state.hidden}
          tabBarPosition="top"
        >
          <TabBar.Item
            selected={this.state.selectedTab === 'blueTab'}
            title="寻找老师"
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
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          > 
           <FindTeacherUI></FindTeacherUI>
          </TabBar.Item>
          <TabBar.Item
            title="预约老师"
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
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <SubscribeTeacherUI></SubscribeTeacherUI>
          </TabBar.Item>
          </TabBar>
          </div>
     </Home>
    )
  }
  
}

export default StudentHomeContainer
