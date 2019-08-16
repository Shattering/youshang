import React,{Component} from 'react'
import {StyledHeader} from './StyledHeader'
import back from '../../assets/images/back.png'
import {withRouter} from 'react-router-dom';


class Header extends Component{

    constructor(props){
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this)
        this.state=({
            data: ""
        })
    }

    getLocation() {
      console.log(1)
      window.wx.getLocation({
        type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          var speed = res.speed; // 速度，以米/每秒计
          var accuracy = res.accuracy; // 位置精度
          console.log(res)
          return res
        }
      });
    }

    render(){
        return (
            <StyledHeader>
                <div className="head">
                    <p onClick={()=>this.getLocation()}>
                        <img onClick={this.handleBackClick} alt="" src={`${back}`} />
                        {this.props.name}
                        <span onClick = {()=>{
                        this.props.history.push(this.props.to)
                      }}>{this.props.link}</span>
                    </p>
                </div>
            </StyledHeader>
        )
    }
    handleBackClick(){
        this.props.history.go(-1)
    }
}


export default withRouter(Header)