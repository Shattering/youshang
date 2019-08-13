import React from 'react'
import axios from 'axios'
import LoginHeader from '../../../components/loginHeader/LoginHeader';
import {
  StyledSignIn
} from './StyledSignIn'
import { Toast } from 'antd-mobile';

export default class SignInUI extends React.Component{
constructor(props){
  super(props)
  this.state = ({
    cd:60,
    phoneVal:"",
    codeVal:"",
    passwordVal:"",
    tpasswordVal:"",
    isSend:true
  })
  this.phoneInput = this.phoneInput.bind(this)
  this.codeInput = this.codeInput.bind(this)
  this.handleGetVer = this.handleGetVer.bind(this)
  this.passwordInput = this.passwordInput.bind(this)
  this.tpasswordInput = this.tpasswordInput.bind(this)
  this.handleConfirm = this.handleConfirm.bind(this)
}

render(){
    return(
      <StyledSignIn>
        <LoginHeader name1="注册"></LoginHeader>
        <main>
          <div className="form">
            <input type="text" onChange={this.phoneInput} value={this.state.phoneVal} placeholder="请输入11位手机号"/>
            {this.state.isSend?
            <button onClick={this.handleGetVer}>获取验证码</button>:
            <button><i>{this.state.cd}</i>秒后失效</button>
            }
            <input type="text" onChange={this.codeInput} value={this.state.codeVal} placeholder="请输入验证码"/>
            <input type="password" onChange={this.passwordInput} value={this.state.passwordVal}  placeholder="请输入密码(6-20位数字或英文字符)"/>
            <input type="password" onChange={this.tpasswordInput} value={this.state.tpasswordVal}  placeholder="请再次输入新密码"/>
          </div>
          <div className="confirm">
            <button onClick={this.handleConfirm}>确认</button>
          </div>
          
        </main>
      </StyledSignIn>
    )
  }
  phoneInput(e){
    this.setState({
      phoneVal:e.target.value
    })
  }
  codeInput(e){
    this.setState({
      codeVal:e.target.value.toString()
    })
  }
  passwordInput(e){
    this.setState({
      passwordVal:e.target.value
    })
  }
  tpasswordInput(e){
    this.setState({
      tpasswordVal:e.target.value
    })
  }

  async handleGetVer(){
  let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
  if(reg.test(this.state.phoneVal)){
    let result = await axios({
      url: 'http://120.55.44.34/yanzhengma',
      method: 'post',
      data: {
      phone: `${this.state.phoneVal}`
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
      this.setState({
          isSend:false
      })
      var countdown=setInterval(() => {
          this.setState({
              cd:this.state.cd-1
          })
      }, 1000);
      setTimeout(() => {
          clearInterval(countdown)
          this.setState({
              cd:60,
              isSend:true
          })
      }, 60000);
  }
  }
  else if(this.state.phoneVal === " ")
  {
    Toast.info('请输入手机号',1)
  }
  else{
    Toast.fail('手机号格式不正确',1)
  }
  
  }

  async handleConfirm(){
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
    if(reg.test(this.state.passwordVal) && this.state.passwordVal===this.state.tpasswordVal){
      if(localStorage.type==="1"){
        let result = await axios({
        url:'http://120.55.44.34/teacher/register',
        method: 'post',
        data: {
        phone: `${this.state.phoneVal}`,
        num:`${this.state.codeVal}`,  //验证码
        password:`${this.state.passwordVal}`,
        tpassword:`${this.state.tpasswordVal}`
        },
        transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        
        }
        // ret=ret.RTrim('&')
        // setTimeout(()=>{
        //   console.log(ret)
        // },1000)
        
        return ret
        }],
        })
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          console.log(error);
        });
        if(result.data.code===0){
          Toast.info("恭喜注册老师账号成功")
        }
      }  
      else{
        let result = await axios({
          url:'http://120.55.44.34/student/register',
          method: 'post',
          data: {
          phone: `${this.state.phoneVal}`,
          num:`${this.state.codeVal}`,  //验证码
          password:`${this.state.passwordVal}`,
          tpassword:`${this.state.tpasswordVal}`
        },
        transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret=ret.slice(0,ret.Length-1)
        console.log(ret)
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
          Toast.info("恭喜注册学生账号成功")
        }
      }
    }
    else if(reg.test(this.state.passwordVal)===false)
    {
      Toast.fail("密码格式错误",1)
    }
    else if(this.state.passwordVal!==this.state.tpasswordVal)
    {
      Toast.fail("与第一次密码不相同",1)
    }
    
  }

}