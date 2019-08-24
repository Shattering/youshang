import React,{ Component } from 'react'
import LoginHeader from '../../../components/loginHeader/LoginHeader';
import {
  StyledForgetCode
} from './StyledForgetCode'
import logo from '../../../assets/images/LOGO.png'
import { Toast } from 'antd-mobile'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class ForgetCodeUI extends Component{
  constructor(props){
    super(props)
    this.state=({
      cd:60,
      phoneVal:"",
      codeVal:"",
      isSend:"true"
    })
    this.phoneInput = this.phoneInput.bind(this)
    this.codeInput = this.codeInput.bind(this)
    this.handleGetVer = this.handleGetVer.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }
  render(){
    console.log(this.props)
    return(
        <StyledForgetCode>
          <LoginHeader name1="忘记密码"></LoginHeader>
          <main>
            <div className="logo">
                <img src={`${logo}`} alt=""/>
                <h1>优尚家教</h1>
            </div>
            <div className="form">
              {this.state.isSend?
              <button onClick={this.handleGetVer}>获取验证码</button>:
              <button><i>{this.state.cd}</i>秒后失效</button>
              }
              <input type="text" value={this.state.phoneVal} onChange={this.phoneInput} placeholder="请输入电话"/>
              <input type="text" value={this.state.codeVal} onChange={this.codeInput} placeholder="请输入6位验证码"/>
            </div>
            <div className="next">
              <button onClick={this.handleNext}>下一步</button>
            </div>
          </main>
        </StyledForgetCode>
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

  async handleGetVer(){
    let reg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    if(reg.test(this.state.phoneVal)){
      let result = await axios({
        url: 'http://120.55.44.34/yanzhengma',
        method: 'post',
        data: {
        phone:this.state.phoneVal
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

  async handleNext(){
      let result = await axios({
        url: 'http://120.55.44.34/yanzheng/changepassword',
        method: 'post',
        data: {
        phone:this.state.phoneVal,
        num:Number(this.state.codeVal)
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
      if(result.data.code===0){
        this.props.history.push('/forgetcode/resetcode')
      }
      else{
        Toast.fail("验证码错误")
      }
      // this.props.history.push('resetcode')
      // console.log(this.props)
    }

}

export default withRouter(ForgetCodeUI)
