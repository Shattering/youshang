import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import OrderUI from './OrderUI'
import  axios from 'axios';
import { Modal} from 'antd';
const { confirm } = Modal;

class OrderDetailContainer extends Component{
   constructor(props){
      super();
      this.state={
          buttonDisplay: false,
          conform: false,
      }
      this.handleconformOrder=this.handleconformOrder.bind(this)
   }

   getDerivedProprsfromState(){

   }
    render(){
        return (
            <OrderUI  
            details={this.props.location.state.detailitem}
            conformOrder={this.handleconformOrder}
            buttonDisplay={this.state.buttonDisplay}
            >   
            </OrderUI>
        )
    }

    handleconformOrder(id) {
        confirm({
            title: 'Do you want to make an appointment with the teacher ?',
            content: '确定预约后你可以：联系老师或完成订单',
            onOk: ()=> {
                this.setState({ 
                     buttonDisplay: true,
                     conform: true
                     })
                axios({
                url:`../api/remarks/${id}`,
                method: 'PATCH',
                data:`remark=${this.props.location.state.remarks}`,
                headers:{ 'content-type': 'application/x-www-form-urlencoded' },
                })
                .then((response)=> {
                })
                .catch(function (error) {
                console.log(error);
                });
            
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