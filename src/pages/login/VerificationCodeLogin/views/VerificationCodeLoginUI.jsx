import React from 'react'
import LoginHeader from '../../../../components/loginHeader/LoginHeader';
import {
  StyledVerificationCodeLogin
} from './StyledVerificationCodeLogin'
import logo from '../../../../assets/images/LOGO.png'
import WX from '../../../../assets/images/微信icon.png'
import Input from '../../../../components/input/Input'

export default () => {
  return(
    <StyledVerificationCodeLogin>
      <LoginHeader name1="验证码登录" name2="密码登录"></LoginHeader>
      <main>
        <div className="logo">
            <img src={`${logo}`} alt=""/>
            <h1>优尚家教</h1>
        </div>
        <form action="post">
          <button>获取验证码</button>
          <Input type="text"/>
          <Input type="text" placeholder="请输入登录密码"/>
        </form>
        <p>我已阅读和同意<span>《承诺说明书》</span>,<span>《服务协议》</span>,<span>《隐私权协议》</span>未注册手机号码需注册后登录。</p>
        <div className="confirm">
          <button>确认</button>
        </div>
        
      </main>
      <footer>
        <p className="p1">一您还可以使用以下方式登陆一</p>
        <div>
          <img src={`${WX}`} alt=""/>
          <p>微信</p>
        </div>
      </footer>
    </StyledVerificationCodeLogin>
  )
}
