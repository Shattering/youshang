import React, { Component } from 'react';
import Header from 'components/header/Header'

class Address extends Component {
  constructor(props){
    super(props)
    this.state=({
      address: '11'
    })
    this.getAddress = this.getAddress.bind(this)
  }
  getAddress(){
    console.log(11)
  }

  componentDidMount(){
  }
  render (){
    return (
      <>
        <Header name="所在地"></Header>
        <div onClick={this.getAddress}>Address</div>
        <div>{this.state.address}</div>
      </>
    )
  }
}

export default Address