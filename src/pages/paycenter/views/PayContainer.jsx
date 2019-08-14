import React,{Component} from 'react'
import PayUI from './PayUI'

class PayContainer extends Component{
    constructor(){
        super();
        this.state={
            showCode: false
        } 
        this.handleWxPay= this.handleWxPay.bind(this)
    }
   
    render(){
        return (
            <PayUI 
            details= {this.props.location.state.details}
            WxPay={this.handleWxPay}
            showCode={this.state.showCode}
            >
            </PayUI>
        )
    }

    handleWxPay(e) {
          this.setState({
            showCode: true
          })
    }
}

export default PayContainer