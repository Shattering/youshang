import React,{Component} from 'react'
import MessageUI from './MessageUI'

class MessageContainer extends Component {
  constructor(props){
    super(props);
    this.state=({
        data: ""
    })
}
  render() {
    return (
      <MessageUI></MessageUI>
    )
  }

  componentDidMount(){
    console.log(this.props)
  }

}

export default MessageContainer