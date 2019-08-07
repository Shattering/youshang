import React,{Component} from 'react'
import OrderCenterUI from './OrderCenterUI'
import {OrderHome} from './StyledOrderCenter'
import { TabBar } from 'antd-mobile';
import Header from '../../../components/header/Header'
import './OrderCenter.css'

class OrderCenterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tocompleted',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
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
           <OrderCenterUI></OrderCenterUI>
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
           <OrderCenterUI></OrderCenterUI>
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
           <OrderCenterUI></OrderCenterUI>
          </TabBar.Item>
          </TabBar>
          </div>
      </OrderHome>
    )
  }
}

export default OrderCenterContainer