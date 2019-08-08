import React from 'react'
import LoginHeader from '../../../components/loginHeader/LoginHeader';
import {
  StyledForgetCode
} from './StyledForgetCode'
import logo from '../../../assets/images/LOGO.png'
import Input from '../../../components/input/Input'

export default () => {
  return(
    <StyledForgetCode>
      <LoginHeader name1="忘记密码"></LoginHeader>
      <main>
        <div className="logo">
            <img src={`${logo}`} alt=""/>
            <h1>优尚家教</h1>
        </div>
        <form action="post">
          <button>获取验证码</button>
          <Input type="text" placeholder="请输入电话"/>
          <Input type="text" placeholder="请输入6位验证码"/>
        </form>
        <div className="confirm">
          <button>下一步</button>
        </div>
        
      </main>
    </StyledForgetCode>
  )
}
