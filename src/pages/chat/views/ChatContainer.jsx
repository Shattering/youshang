import React,{Component} from 'react'
import ChatUI from './ChatUI'
import BScroll from 'better-scroll'

class ChatContainer extends Component {

  constructor(props) {
    super(props)
    this.state={
      inputVal:'',
      msgList:[],
    }
    this.ctx = React.createRef();
    this.submit = this.submit.bind(this)
    this.getInputValue = this.getInputValue.bind(this)
  }

  //input值改变时动态设置state中的inputval
  getInputValue = (e) => {
    this.setState({
      inputVal : e.target.value,
    })
  };

  //点击发送时 向服务端发送当前输入的值和type
  submit() {
    let type = localStorage.getItem("type")
    let msg = this.state.inputVal
    let data = {
      type,
      msg
    }
    this.ws.send(JSON.stringify(data))
    this.setState({inputVal:''})
    this.ctx.current.value=""
    this.ctx.current.focus()

    //聊天自动滚动到底部
    setTimeout(()=>{
      this.scroll.scrollTo(0,this.scroll.maxScrollY)
    },50);
  }

  //实现websocket
  Websocket() {
    this.ws = new WebSocket('ws://10.9.65.209:3333/chat')
  
    this.ws.onmessage = (msg) => {
      let data = JSON.parse(msg.data)
      console.log()
      let msgList = {
        type:data.type,
        msg:data.msg
      }
      console.log(msgList)
      this.setState({
        msgList: [...this.state.msgList, msgList]
      })
    }
  
    this.ws.onerror = (err) => {
      console.log(err);
    }
  
    this.ws.onclose = () => {
      console.log('closed~');
    }
  }

  //调用websocket 并且初始化 better-scroll
  componentDidMount() {
    this.Websocket()
    this.scroll = new BScroll('.chatContainer',{
      click:true,
      scrollY: true,
    })
  }
  
  render() {
    return (
      <ChatUI 
        getInputValue = { this.getInputValue }
        submit={ this.submit }
        inputVal={ this.state.inputVal }
        ctx={ this.ctx }
        msgList = { this.state.msgList }
      ></ChatUI>
    )
  }
}

export default ChatContainer