import React, { Component } from 'react';
import Header from 'components/header/Header'
import { BorderedLI } from '../views/styledPersonal';
import PhoneUI from './PhoneSty'

class Phone extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      phone: localStorage.phone,
    })
    this.changePhone = this.changePhone.bind(this)
    this.saveChangePhone = this.saveChangePhone.bind(this)
  }
  changePhone(e){
    this.setState({phone: e.target.value});
  }
  saveChangePhone(){
    localStorage.setItem("phone",this.state.phone)
  }

  render() {
    return (
      <>
        <Header name="联系电话"></Header>
        <PhoneUI>
          <BorderedLI className="item-box" hasBorder={true}>
            <span>老师手机号：</span>
            <input type="text"  value={this.state.phone} onChange={this.changePhone} onBlur={this.saveChangePhone}  placeholder="请输入手机号"/>
          </BorderedLI>
        </PhoneUI>
      </>
    )
  }
}

export default Phone