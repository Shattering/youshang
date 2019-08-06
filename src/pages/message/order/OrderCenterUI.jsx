import React from 'react'
import {
  OrderCenter,
  Header,
} from './StyledOrderCenter'

export default () => {
  return(
    <OrderCenter>
      <Header>订单中心</Header>
      <ul>
        <li>
          <img src="images/dingdan.png" alt=""/>
          <div className = 'orderbody'>
            <div className = 'bodytop'>
              <div>
                <span>
                  徐小明 小学
                </span>
                <span>
                  已完成
                </span>
              </div>
              科目：<span>语文</span>
              时间：<p>6月1 19:00-20:30 1.5小时</p>
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
