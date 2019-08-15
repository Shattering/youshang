import React, { Component } from 'react';
import Header from 'components/header/Header'
import { BorderedLI } from '../views/styledPersonal';
import PhoneUI from './PhoneSty'

class Self extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: localStorage.name,
      IDtype: localStorage.IDtype,
      self: localStorage.self,
    })
    this.changeName = this.changeName.bind(this)
    this.saveChangeName = this.saveChangeName.bind(this)
    this.changeIDtype = this.changeIDtype.bind(this)
    this.saveChangeIDtype = this.saveChangeIDtype.bind(this)
    this.changeSelf = this.changeSelf.bind(this)
    this.saveChangeSelf = this.saveChangeSelf.bind(this)
  }
  changeName(e){
    this.setState({name: e.target.value});
  }
  saveChangeName(){
    localStorage.setItem("name",this.state.name)
  }
  changeIDtype(e){
    this.setState({IDtype: e.target.value});
  }
  saveChangeIDtype(){
    localStorage.setItem("IDtype",this.state.IDtype)
  }

  changeSelf(e){
    this.setState({self: e.target.value});
  }
  saveChangeSelf(){
    localStorage.setItem("self",this.state.self)
  }

  render (){
    return (
      <>
        <Header name="身份证信息"></Header>
        <PhoneUI>
          <BorderedLI className="item-box" hasBorder={true}>
              <span>真实姓名</span>
              <input type="text"  value={this.state.name} onChange={this.changeName} onBlur={this.saveChangeName}  placeholder="请输入姓名"/>
            </BorderedLI>
            <BorderedLI className="item-box" hasBorder={true}>
              <span>证件类型</span>
              <input type="text"  value={this.state.IDtype} onChange={this.changeIDtype} onBlur={this.saveChangeIDtype}  placeholder="请输入证件类型"/>
            </BorderedLI>
            <BorderedLI className="item-box" hasBorder={true}>
              <span>证件号码</span>
              <input type="text"  value={this.state.self} onChange={this.changeSelf} onBlur={this.saveChangeSelf}  placeholder="请输入证件号码"/>
            </BorderedLI>

        </PhoneUI>
      </>
    )
  }
}

export default Self