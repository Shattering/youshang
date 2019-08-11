import React,{Component} from 'react'
import {
  Home
} from './StyledHome'
import { TabBar } from 'antd-mobile';
import MySwiper from 'components/swiper/views/Swiper'
import FindItemContainer from 'components/FindTeacherItem/FindItemContainer'
import SubscribeTeacherUI from './SubscribeTeacherUI'
import  axios from 'axios';
class StudentHomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
      findTeacherlist: []
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
           
           <FindItemContainer 
           list = {this.state.findTeacherlist.length ? this.state.findTeacherlist : ''}
           > 
           </FindItemContainer>
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
  
 async componentDidMount() {
   await axios({
          url:'../api/remarks',
          method: 'GET',
          headers:{ 'content-type': 'application/x-www-form-urlencoded' },
        })
        .then((response)=> {
          this.setState({
            findTeacherlist: response.data
          })
        })
        .catch(function (error) {
          console.log(error);
        });
     
  }
}

export default StudentHomeContainer
