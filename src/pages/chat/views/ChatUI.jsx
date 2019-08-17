import React from 'react'
import { ChatMessage } from './StyleChat'
import Header from 'components/header/Header'

export default ({
  msgList,
  InputVal,
  getInputValue,
  ctx,
  submit
}) => {
  return(
    <ChatMessage>
      <Header name="聊天"></Header>
      <div id="content" name="name" className="chatContainer">
        <div className="wrapper">
          <div className="timer"><span>2019年7月12日 12:12</span></div>
          <ul>
            {
              msgList.map((item,index) => {
                let storageType = localStorage.getItem("type")
                let msgUrl = item.type === '0' ? "/images/touxiang.png" : "/images/touxaing.png"
                return (item.type === storageType
                ? (
                  <div className="msg-box tea" key={`${item.type}${index}`}>
                    <div className="avator"><img alt="" src={msgUrl}  /></div>
                    <span className="iconfont" style={{color:"#fff",fontSize:"12px"}}>&#xe652;</span>
                    <div className="msg teaMsg">{item.msg}</div>
                  </div>
                )
                : (
                  <div className="msg-box stu" key={`${item.type}${index}`}>
                    <div className="avator"><img alt="" src={msgUrl}  /></div>
                    <span className="iconfont" style={{color:"#fff",fontSize:"12px"}}>&#xe601;</span>
                    <div className="msg stuMsg">{item.msg}</div>
                  </div>)
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="send">
        <div className="voice"><span className="iconfont">&#xe615;</span></div>
        <input 
          type="text" 
          id="msg" 
          className="content"
          value={InputVal}
          onChange={getInputValue}
          ref={ctx}
          style={{width: '200px'}} 
        />
        <button className="sendMsg" onTouchStart={submit}>
          <span>发送</span>
        </button>
      </div>
    </ChatMessage>
  )
}
