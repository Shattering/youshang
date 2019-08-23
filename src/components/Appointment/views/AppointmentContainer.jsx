import React,{Component} from 'react'
import AppointmentUI from './AppointmentUI'
import {connect} from 'react-redux'
import {getLocationAsync} from './actionCreator'
const mapState= state => ({  
  //把store中subscribelist.list数据放在了 props.list上
  locationlist: state.appointmentlist.locationlist
  })
  
  const mapDispatch = (dispatch) => ({
    showMap() {
          dispatch(getLocationAsync())
      }
  })

class AppointmentContainer extends Component{
   constructor(props){
      super();
     
   }
    render(){
        return (
            <AppointmentUI >   
            </AppointmentUI>
        )
    }



}

export default connect(mapState, mapDispatch)(AppointmentContainer)