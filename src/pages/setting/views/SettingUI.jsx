import React from 'react'
import {Setting} from './styledSetting'
import Header from '../../../components/header/Header'
import { Link } from 'react-router-dom'
import {BorderedLI} from './styledSetting'
export default () => {
    return (
        
        <Setting>
            <Header name="设置"></Header>
            <div className="body">
          <div className="blank">
          </div>
          <ul>
            <BorderedLI hasBorder={true}>
              <Link to="/mine/setting/feedback">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/personal">意见反馈</div>
              </Link>
            </BorderedLI>

            <BorderedLI hasBorder={true}>
              <Link to="/mine/setting/contactus">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/order">联系我们</div>
              </Link>
            </BorderedLI>

            <BorderedLI hasBorder={true}>
              <Link to="/mine/setting/aboutus">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/setting">关于我们</div>
              </Link>
            </BorderedLI>

            <BorderedLI hasBorder={true}>
              <Link to="/mine/setting/quit">
                <i></i>
                <div style={{color:"rgba(82,82,82,1)"}} to="/mine/setting">退出</div>
              </Link>
            </BorderedLI>
            
          </ul>
      </div>
        </Setting>
        
    )
}