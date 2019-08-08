import React from 'react'
import LoginHeader from '../../../components/loginHeader/LoginHeader';
import {
  StyledSignIn
} from './StyledSignIn'
import Input from '../../../components/input/Input'

export default () => {
  return(
    <StyledSignIn>
      <LoginHeader name1="注册"></LoginHeader>
      <main>
        <form action="post">
          <button>获取验证码</button>
          <Input type="text" placeholder="请输入11位手机号"/>
          <Input type="text" placeholder="请输入登录密码"/>
          <Input type="text" placeholder="请输入密码(6-20位数字或英文字符)"/>
          <Input type="text" placeholder="请再次输入新密码"/>
        </form>
        <div className="confirm">
          <button>确认</button>
        </div>
        
      </main>
    </StyledSignIn>
  )
}
