import React , {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import HomeItem from 'components/HomeItem/HomeItem'

import {loadDataAsync} from './actionCreator'

const mapState= state => ({  
//把store中subscribelist.list数据放在了 props.list上
    list: state.subscribelist.list
})

const mapDispatch = (dispatch) => ({
    loadData() {
        dispatch(loadDataAsync())
    }
})

class SubscribeTeacherUI extends Component {
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
 export default connect(mapState, mapDispatch)(withRouter(SubscribeTeacherUI))