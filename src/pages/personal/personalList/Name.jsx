import React, { Component } from 'react';
import Header from 'components/header/Header'
import NameUI from './NameSty';
import {BorderedLI} from '../views/styledPersonal';
import img2x from 'assets/images/delate@2x.png'
import img3x from 'assets/images/delate@3x.png'



class Name extends Component {
  constructor(props){
    super(props)
    this.state=({
      name : localStorage.name,
      url: window.devicePixelRatio === 2 ? img2x : img3x
    })
    this.changeName = this.changeName.bind(this)
    this.saveChangeName = this.saveChangeName.bind(this)
    this.clearName = this.clearName.bind(this)
  }
  changeName(e){
    this.setState({name: e.target.value});
  }
  saveChangeName(){
    localStorage.setItem("name",this.state.name)
  }
  clearName(e){
    this.setState({name:''});
    localStorage.setItem("name",'')
  }
  render (){
    return (
      <>
        <Header name="姓名"></Header>
        <NameUI>
          <p>请输入姓名</p>
          <BorderedLI className="item-box" hasBorder={true}>
            <input type="text" value={this.state.name} onChange={this.changeName} onBlur={this.saveChangeName} placeholder="请输入姓名"/>
            <img src={this.state.url} alt="" onClick={this.clearName}/>
          </BorderedLI>
        </NameUI>
      </>
    )
  }
}

export default Name