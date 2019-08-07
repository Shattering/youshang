import React from 'react'
import {
  OrderCenter
} from './StyledOrderCenter'


export default () => {
  return(
    <OrderCenter>
      <ul>
        <li>
          <img src="images/dingdan.png" alt=""/>
          <div className = 'orderbody'>
            <div className = 'bodytop'>
              <div>
                <span className = 'spantop'>
                  徐小明 小学
                </span>
                <span className = 'spanbottom'>
                  已完成
                </span>
              </div>
              <span>科目：语文</span>
              <p>时间：6月1 19:00-20:30 1.5小时</p>
            </div>
            <div className = 'bodybottom'>
            价格：<span> ￥120</span>
            </div>
          </div>
        </li>
        <li>
          <img src="images/dingdan.png" alt=""/>
          <div className = 'orderbody'>
            <div className = 'bodytop'>
              <div>
                <span className = 'spantop'>
                  徐小明 小学
                </span>
                <span className = 'spanbottom'>
                  已完成
                </span>
              </div>
              <span>科目：语文</span>
              <p>时间：6月1 19:00-20:30 1.5小时</p>
            </div>
            <div className = 'bodybottom'>
            价格：<span> ￥120</span>
            </div>
          </div>
        </li>
        <li>
          <img src="images/dingdan.png" alt=""/>
          <div className = 'orderbody'>
            <div className = 'bodytop'>
              <div>
                <span className = 'spantop'>
                  徐小明 小学
                </span>
                <span className = 'spanbottom'>
                  已完成
                </span>
              </div>
              <span>科目：语文</span>
              <p>时间：6月1 19:00-20:30 1.5小时</p>
            </div>
            <div className = 'bodybottom'>
            价格：<span> ￥120</span>
            </div>
          </div>
        </li>
      </ul>
    </OrderCenter>
  )
}
