import React, { Component } from 'react';
import Header from 'components/header/Header'
import TeachUI from './TeachSty'

class Teach extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      teach: localStorage.teach,
    })
    this.changeTeach = this.changeTeach.bind(this)
    this.saveChangeTeach = this.saveChangeTeach.bind(this)
  }
  changeTeach(e){
    this.setState({teach: e.target.value});
  }
  saveChangeTeach(){
    localStorage.setItem("teach",this.state.teach)
  }

  render (){
    return (
      <>
        <Header name="教学经历"></Header>
        <TeachUI>
          <textarea name="teach" id="teach" value={this.state.teach} onChange={this.changeTeach} onBlur={this.saveChangeTeach}/>
        </TeachUI>
      </>
    )
  }
}

export default Teach