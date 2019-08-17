import React,{ Component } from 'react'
import LoginHeader from '../../../components/loginHeader/LoginHeader';
import {
  StyledResetCode
} from './StyledForgetCode'
import logo from '../../../assets/images/LOGO.png'
import { Toast } from 'antd-mobile'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class ResetCodeUI extends Component{
  constructor(props){
    super(props)
    this.state=({
      passwordVal:"",
      tpasswordVal:"",
    })
    this.passwordInput = this.passwordInput.bind(this)
    this.tpasswordInput = this.tpasswordInput.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }
  render(){
    return(
        <StyledResetCode>
          <LoginHeader name1="重置密码"></LoginHeader>
          <main>
            <div className="logo">
                <img src={`${logo}`} alt=""/>
                <h1>优尚家教</h1>
            </div>
            <div className="form">
              <input type="password" value={this.state.passwordVal} onChange={this.passwordInput} placeholder="请输入密码(6-20位数组或英文字符)"/>
              <input type="password" value={this.state.tpasswordVal} onChange={this.tpasswordInput} placeholder="再次输入新密码"/>
            </div>
            <div className="next">
              <button onClick={this.handleConfirm}>确定</button>
            </div>
          </main>
        </StyledResetCode>
      )
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

async handleConfirm(){
    if(this.state.passwordVal === this.state.tpasswordVal){
        let result = await axios({
          url: 'http://120.55.44.34/changepassword',
          method: 'post',
          data: {
          password:this.state.passwordVal,
          tpassword:this.state.tpasswordVal,
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
          Toast.loading('重置成功',1,()=>{
            this.props.history.push(`/passwordlogin`)
          })
        }
    }
    else{
      Toast.info("两次密码不一致",2)
    }
  }
      
}

export default withRouter(ResetCodeUI)
