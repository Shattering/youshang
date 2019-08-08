import React from 'react'
import {
  ChatMessage,
} from './StyleChat'
import Header from 'components/header/Header'

export default (props) => {
  return(
    <ChatMessage>
      <Header name="聊天"></Header>
      <div id="content" name="name" style={{overflowY: 'scroll', width: '400px', height: '300px', border: 'solid 1px #000'}}></div>
      <br />
      <div>
        <input type="text" id="msg" 
          value={props.InputVal}
          onChange={props.getInputValue}
          style={{width: '200px'}} 
        />
      </div>
      <button onClick={props.submit}>提交</button>
    </ChatMessage>
  )
}
