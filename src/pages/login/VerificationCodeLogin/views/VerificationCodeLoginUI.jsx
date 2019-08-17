import React,{Component} from 'react'
import LoginHeader from '../../../../components/loginHeader/LoginHeader';
import {
  StyledVerificationCodeLogin
} from './StyledVerificationCodeLogin'
import logo from '../../../../assets/images/LOGO.png'
import WX from '../../../../assets/images/微信icon.png'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

class VerificationCodeLoginUI extends Component{
  constructor(props){
    super(props)
    this.state=({
      phoneVal:"",
      codeVal:"",
      cd:"60",
      isSend:true
    })
    this.phoneInput = this.phoneInput.bind(this)
    this.codeInput = this.codeInput.bind(this)
    this.handleGetVer = this.handleGetVer.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render(){
    return(
    <StyledVerificationCodeLogin>
      <LoginHeader name1="验证码登录" name2="密码登录"></LoginHeader>
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
          <input value={this.state.phoneVal} onChange={this.phoneInput} type="text" placeholder="请输入手机号"/>
          <input value={this.state.codeVal} onChange={this.codeInput} type="text" placeholder="请输入6位验证码"/>
        </div>
        <p>我已阅读和同意<span>《承诺说明书》</span>,<span>《服务协议》</span>,<span>《隐私权协议》</span>未注册手机号码需注册后登录。</p>
        <div className="confirm">
          <button onClick={this.handleConfirm}>确认</button>
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

  phoneInput(e){
    this.setState({
      phoneVal:e.target.value
    })
  }
  codeInput(e){
    this.setState({
      codeVal:e.target.value
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

  async handleConfirm(){
        let result =await axios({
          url:"http://120.55.44.34/dxlogin",
          method:"post",
          data:{
            phone:this.state.phoneVal,
            num:Number(this.state.codeVal),
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
          if(result.data.code===0){
            localStorage.setItem("success","1")
            Toast.loading('登陆成功',1,()=>{
              this.props.history.push(`/index/home`)
            })
          }
      }
}
    
export default withRouter(VerificationCodeLoginUI)
  