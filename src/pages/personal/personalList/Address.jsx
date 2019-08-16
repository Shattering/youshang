import React, { Component } from 'react';
import Header from 'components/header/Header'
import { BorderedLI } from '../views/styledPersonal';
import PhoneUI from './PhoneSty'

class Address extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      address: localStorage.address ? localStorage.address : ''
    })
    this.getAddress = this.getAddress.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.saveChangeAddress = this.saveChangeAddress.bind(this)
  }

  async getAddress() {
    const BMap = window.BMap
    var addr = ''
    var geolocation = new BMap.Geolocation();
    await geolocation.getCurrentPosition( function (r) {
      if (this.getStatus() === window.BMAP_STATUS_SUCCESS) {
        var point = new BMap.Point(r.point.lng, r.point.lat);
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function (res) {
          addr = res.address
        })
      } else {
        console.log('无法定位，请手动输入您的位置！');
      }
    }, { enableHighAccuracy: true });
    setTimeout(()=>{
      this.setState({
        address: addr
      })
      localStorage.setItem('address',addr)
    },1000)
  }

  changeAddress(e){
    this.setState({Address: e.target.value});
  }
  saveChangeAddress(){
    localStorage.setItem("Address",this.state.Address)
  }

  render() {
    return (
      <>
        <Header name="所在地"></Header>
        <PhoneUI>
          <BorderedLI className="item-box" hasBorder={true}>
            <span>地址：</span>
            <input type="text"  value={this.state.address} onChange={this.changeAddress} onBlur={this.saveChangeAddress}  placeholder="手动输入地址"/>
          </BorderedLI>
            <div onClick={this.getAddress} style={{background:"#eee",margin:"0 auto",width: "1.6rem",textAlign:"center"}}>点击获取地址</div>
        </PhoneUI>
      </>
    )
  }
}

export default Address