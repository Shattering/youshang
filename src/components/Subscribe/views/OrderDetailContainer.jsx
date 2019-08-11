import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import OrderUI from './OrderUI'
//import  axios from 'axios';
class OrderDetailContainer extends Component{
   constructor(props){
      super();
      this.state={
          buttonDisplay: false
      }
      this.handleWriteComments=this.handleWriteComments.bind(this)
      this.handleconformOrder=this.handleconformOrder.bind(this)
    //   this.deleteOrder=this.handledeleteOrder.bind(this)
   }


    render(){
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

    handleWriteComments(oid) {
        console.log(oid)
         this.props.history.push('/writeComments',{
             oid
         })
    }
    handleconformOrder() {
        console.log(1)
        console.log(!this.state.buttonDisplay)
        this.setState({ buttonDisplay: !this.state.buttonDisplay }) 
    }
    // handledeleteOrder(oid) {
    //      this.props.history.go(-1)

        // console.log(`api/remarks/${oid}`)
        // axios({
        //     url:`api/remarks/${oid}`,
        //     method: 'DELETE'
        //   })
        //   .then((response)=> {
        //     console.log('取消成功');
           
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
//    }

}

export default withRouter(OrderDetailContainer)