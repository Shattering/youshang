import React,{Component} from 'react'
import OrderUI from './OrderUI'

class OrderContainer extends Component{
    render(){
        // console.log(this.props.history.location.state.item);
        return (
            <OrderUI list={this.props.history.location.state.item}></OrderUI>
        )
    } 
}
 
export default OrderContainer