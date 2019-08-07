
import React from 'react'
import BScroll from 'better-scroll'
import FindItemUI from './FindItemUI'
class FindItemContainer extends React.Component {
    constructor(props) {
       super(props);
        this.state = {
            findTeacherlist: this.props.list
        };
      }
    render() {
       return (
           <>
        <FindItemUI list={this.props.list.length? this.props.list: ''}></FindItemUI>
        </>
       ) 
    }

    componentDidMount() {
         this.bScrollLeft = new BScroll('#scroll-wrap-find')
    }
}

export default FindItemContainer