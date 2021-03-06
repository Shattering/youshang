import React,{Component} from 'react'
import {
  Home
} from './StyledHome'
import { TabBar } from 'antd-mobile';
import MySwiper from 'components/swiper/views/Swiper'
import TeacherOnlineContainer from './TeacherOnline/TeacherOnlineContainer'
import TakeOrderUI from './TakeOrderUI'

class TeacherHomeContainer extends Component {
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
            title="接单大厅"
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
           <TakeOrderUI></TakeOrderUI>
          </TabBar.Item>
          <TabBar.Item
            title="老师上线"
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
            <TeacherOnlineContainer></TeacherOnlineContainer>
          </TabBar.Item>
          </TabBar>
          </div>
     </Home>
    )
  }
  
}

export default TeacherHomeContainer