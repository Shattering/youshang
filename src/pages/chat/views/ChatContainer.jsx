import React,{Component} from 'react'
import ChatUI from './ChatUI'

class ChatContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      inputVal:''
    }
    this.submit = this.submit.bind(this)
    this.getInputValue = this.getInputValue.bind(this)
  }
  getInputValue = (e) => {
    this.setState({
      inputVal : e.target.value,
    })
  };
  submit() {
    let msg = this.state.inputVal
    this.ws.send(msg)
    this.setState({inputVal:''})
    document.querySelector("#msg").value=""
  }
  componentDidMount() {
    this.ws = new WebSocket('ws://localhost:4444/')
    this.ws.onopen = () => {
      this.ws.send('大家好')
    }

    this.ws.onmessage = (msg) => {
      const content = document.getElementById('content')
      content.innerHTML += msg.data + '<br/>'
    }

    this.ws.onerror = (err) => {
      console.log(err);
    }

    this.ws.onclose = () => {
      console.log('closed~');
    }
  }
  
  render() {
    return (
      <ChatUI 
        getInputValue = { this.getInputValue }
        submit={ this.submit }
        inputVal={ this.state.inputVal }
      ></ChatUI>
    )
  }
}

export default ChatContainer