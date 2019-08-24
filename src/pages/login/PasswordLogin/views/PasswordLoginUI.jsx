import React,{Component} from 'react'
import LoginHeader from '../../../../components/loginHeader/LoginHeader';
import axios from 'axios'
import {
  StyledPasswordLogin
} from './StyledPasswordLogin'
import logo from '../../../../assets/images/LOGO.png'
import WX from '../../../../assets/images/微信icon.png'
import eyeClosed from '../../../../assets/images/闭眼.png'
import eye from '../../../../assets/images/睁眼.png'
import { Link } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class PasswordLoginUI extends Component{
  constructor(props){
    super(props)
    this.state=({
      showPassword:true,
      phoneVal:"",
      passwordVal:""
    })
    this.handleShowPassword = this.handleShowPassword.bind(this)
    this.phoneInput = this.phoneInput.bind(this)
    this.passwordInput = this.passwordInput.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  
render(){
    return(
    <StyledPasswordLogin>
      <LoginHeader name1="密码登录" name2="验证码登录"></LoginHeader>
      <main>
        <div className="logo">
            <img src={`${logo}`} alt=""/>
            <h1>优尚家教</h1>
        </div>
        <form action="post">
          <input placeholder="请输入手机号" onChange={this.phoneInput} value={this.state.phoneVal} />
        {this.state.showPassword && <img onClick={this.handleShowPassword} src={`${eyeClosed}`} alt=""/>}
        {!this.state.showPassword && <img onClick={this.handleShowPassword} src={`${eye}`} alt=""/>}
          <input onChange={this.passwordInput} value={this.state.passwordVal} className="Password" placeholder="请输入登录密码" type={this.state.showPassword ? "password" : "text"}></input>
        </form>
        <div className="login">
          <button onClick={this.handleLogin}>登陆</button>
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
phoneInput(e){
  this.setState({
    phoneVal:e.target.value
  })
}
passwordInput(e){
  this.setState({
    passwordVal:e.target.value
  })
}

handleShowPassword(){
  console.log(this.state.showPassword)
  this.setState({
      showPassword :!this.state.showPassword
    })
}

async handleLogin(){
  let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  if(reg.test(this.state.phoneVal)){
    let result =await axios({
      url:"http://120.55.44.34/login",
      method:"post",
      data:{
        password:this.state.passwordVal,
        phone:this.state.phoneVal,
        type:localStorage.type==="1"?1:2
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
        }],
        })
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          console.log(error);
      });
      console.log(result)
      if(result.data.code===0){
        localStorage.setItem("success","1")
        Toast.loading('登陆成功',1,()=>{
          this.props.history.push(`/index/home`)
        })
      }
      else{
        Toast.fail("手机号或密码错误",1)
      }
  }
 
}
}


export default withRouter(PasswordLoginUI) 