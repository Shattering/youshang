import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import OrderUI from './OrderUI'

import { Modal} from 'antd';
const { confirm } = Modal;

//import  axios from 'axios';
class OrderDetailContainer extends Component{
   constructor(props){
      super();
      this.state={
          buttonDisplay: false,
          conform: false,
      }
      this.handleWriteComments=this.handleWriteComments.bind(this)
      this.handleconformOrder=this.handleconformOrder.bind(this)
   }

   getDerivedProprsfromState(){

   }
    render(){
        console.log(this.props)
        return (
            <OrderUI  
            details={this.props.location.state.detailitem}
            writeComments = {this.handleWriteComments}
            conformOrder={this.handleconformOrder}
            buttonDisplay={this.state.buttonDisplay}
            >   
            </OrderUI>
        )
    }

    handleWriteComments(id) {
        
        //  this.props.history.push('/writeComments',{
        //      oid
        //  })
         this.props.history.push(`/writeComments/:${id}`)
       
    }
    handleconformOrder() {
        confirm({
            title: 'Do you want to make an appointment with the teacher ?',
            content: '确定预约后你可以：联系老师或完成订单',
            onOk: ()=> {
                this.setState({ 
                     buttonDisplay: true,
                     conform: true
                     })
              return new Promise((resolve, reject) => { 
                setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
                
              }).catch((errors) => console.log(errors));
            },
            onCancel: ()=> { this.setState({ 
                buttonDisplay: false,
                conform: false
             })},
          });
        
    }


}

export default withRouter(OrderDetailContainer)