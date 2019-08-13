import {withRouter} from 'react-router-dom'
import React from 'react'
import BScroll from 'better-scroll'
import FindItemUI from './FindItemUI'
class FindItemContainer extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            findTeacherlist: this.props.list,   
        };
         this.handleToSubscribe = this.handleToSubscribe.bind(this)
      }

    render() {
       return (
           <>
        <FindItemUI 
        list={this.props.list.length? this.props.list: ''}
        toSubscribe= {this.handleToSubscribe}
        >
        </FindItemUI>
        </>
       ) 
    }
    handleToSubscribe(detailitem){
      console.log(detailitem.remark? detailitem.remark : 'hhhh')
      this.props.history.push(`/detail/:${detailitem.id}`,{
        detailitem:detailitem,
        remarks: detailitem.remark? detailitem.remark: ' ',
        orderstatic: detailitem.orderstatic
          }
      )
      
    }
    componentDidMount() {
         this.bScrollLeft = new BScroll('#scroll-wrap-find',{
          click: true
      })
    }
}

export default withRouter(FindItemContainer)