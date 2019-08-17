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
          buttonDisplay: props.location.state.orderstatic==='2' ? true: false,
          orderstatic: props.location.state.orderstatic
         
      }
      this.handleconformOrder=this.handleconformOrder.bind(this)
      this.handlePayOrder= this.handlePayOrder.bind(this)

   }
    render(){
        return (
            <OrderUI 
            orderstatic={this.state.orderstatic} 
            details={this.props.location.state.detailitem}
            conformOrder={this.handleconformOrder}
            PayOrder={this.handlePayOrder}
            buttonDisplay={this.state.buttonDisplay}
            remarks={this.props.location.state.remarks}
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
                     buttonDisplay: true
                     })
                axios({
                url:`../api/remarks/${id}`,
                method: 'PATCH',
                data: {
                     remark: `${this.props.location.state.remarks}`,
                     orderstatic: '2'
                }
                })
                .then((response)=> { 
                    this.setState({
                        orderstatic: '2',
                    })
                    
                })
                .catch(function (error) {
                console.log(error);
                });
            
              return new Promise((resolve, reject) => { 
                setTimeout(Math.random() > 0.5 ? resolve : reject, 500);
                
              }).catch((errors) => console.log(errors));
            },

           onCancel: ()=> { this.setState({ 
            buttonDisplay: false
            })},
        });
        
    }

    handlePayOrder(details){
     //  console.log(details)
         this.props.history.push(
             '/paycenter',{
                details:details 
             }
         )
    }

}

export default withRouter(OrderDetailContainer)