import React from 'react'
import LoginHeader from '../../../../components/loginHeader/LoginHeader';
import {
  StyledPasswordLogin
} from './StyledPasswordLogin'
import logo from '../../../../assets/images/LOGO.png'
import WX from '../../../../assets/images/微信icon.png'
import Input from '../../../../components/input/Input'
import { Link } from 'react-router-dom'
 
export default () => {
  return(
    <StyledPasswordLogin>
      <LoginHeader name1="密码登录" name2="验证码登录"></LoginHeader>
      <main>
        <div className="logo">
            <img src={`${logo}`} alt=""/>
            <h1>优尚家教</h1>
        </div>
        <form action="post">
          <Input placeholder="请输入手机号"/>
          <Input placeholder="请输入登录密码"/>
        </form>
        <div className="login">
          <button>登陆</button>
          <div>
          <Link to="/signin"><p>注册账号</p></Link>
          <Link to="/forgetcode"><p className="p1">忘记密码？</p></Link>
          </div>
        </div>
        
      </main>
      <footer>
        <p className="p1">一您还可以使用以下方式登陆一</p>
        <div>
          <img src={`${WX}`} alt=""/>
          <p>微信</p>
        </div>
      </footer>
    </StyledPasswordLogin>
  )
}
