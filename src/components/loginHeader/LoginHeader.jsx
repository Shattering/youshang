import React,{Component} from 'react'
import { BorderedHeader } from './StyledLoginHeader'
import back from '../../assets/images/返回icon.png'
import { withRouter } from 'react-router-dom';
import {
    Link
  } from 'react-router-dom'
  

class LoginHeader extends Component{

    constructor(props){
        super(props);
        this.handleBackClick = this.handleBackClick.bind(this)
        this.state=({
            data: ""
        })
    }

    render(){
        return (
            
            <BorderedHeader hasBorder="true">
                <div className="fill"></div>
                <div className="container">
                    <div>
                        <img src={`${back}`} alt="" onClick={this.handleBackClick}/>
                    </div>
                    <Link to={this.props.name1==="验证码登录"?"/verificationcodeLogin":"/passwordlogin"}><p className="p1">{this.props.name1}</p></Link>
                    <Link to={this.props.name1==="验证码登录"?"/passwordlogin":"/verificationcodelogin"}><p className="p2">{this.props.name2}</p></Link>
                </div>
                
            </BorderedHeader>
           
        )
    }
    handleBackClick(){
        this.props.history.go("-1")
    }
}


export default withRouter(LoginHeader)