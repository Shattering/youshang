import React ,{Component} from 'react'
import HomeItem from 'components/HomeItem/HomeItem'
 import {connect} from 'react-redux'
 import {withRouter} from 'react-router-dom'
 import {loadDataAsync} from '../../student/subscribe/actionCreator'

 const mapState= state => ({  
 //把store中subscribelist.list数据放在了 props.list上
     list: state.subscribelist.list
 })
 
 const mapDispatch = (dispatch) => ({
     loadData() {
         dispatch(loadDataAsync())
     }
 })
 
 class TakeOrderUI extends Component {
     state = {
         list:[]
       }
 
     render(){
         return(
         <>
          <HomeItem list={this.props.list? this.props.list: ''}></HomeItem>
          </>
        )
     }
 
     componentDidMount() {
         this.props.loadData()
       }
     
  }
  export default connect(mapState, mapDispatch)(withRouter(TakeOrderUI))