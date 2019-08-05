import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Mine,BorderedLI
} from './StyledMine'
import Hello from '../../../assets/images/hello.png'

export default () => {
  return(
    <Mine>
      <header>
          <div className="fill"></div>
          <div className="pic">
              <img src={`${Hello}`} alt="" />
          </div>
          <p className="p1">立即登录</p>
          <p className="p2">登陆/注册后使用更多功能</p>
      </header>
      <div className="body">
          <div className="blank">
          </div>
          <ul>
            <BorderedLI hasBorder={true}>
              <Link to="/mine/personal">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/personal">个人中心</div>
              </Link>
            </BorderedLI>

            <BorderedLI hasBorder={true}>
              <Link to="/mine/order">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/order">订单中心</div>
              </Link>
            </BorderedLI>

            <BorderedLI hasBorder={true}>
              <Link to="/mine/setting">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/setting">设置</div>
              </Link>
            </BorderedLI>
            
          </ul>
      </div>
    </Mine>
  )
}