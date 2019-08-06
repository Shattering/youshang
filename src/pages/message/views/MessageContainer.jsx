import React,{Component} from 'react'
import MessageUI from './MessageUI'
import OrderDetailsUI from '../order/OrderDetailsUI'
import OrderCenterUI from '../order/OrderCenterUI'

class MessageContainer extends Component {
  render() {
    return (
      // <MessageUI></MessageUI>
      <OrderDetailsUI></OrderDetailsUI>
      // <OrderCenterUI></OrderCenterUI>
    )
  }
}

export default MessageContainer