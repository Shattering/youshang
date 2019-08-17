import React from 'react'
import {
  Pay,
  Ul,
  BigUl,
  DD,
  PayButton
 
} from './styledPay'
import Header from '../../../components/header/Header'


export default (props) => {
  return(
    <Pay>
        <Header name= '确认订单'  > 
        </Header>
        <BigUl>
          <Ul>
            <li className="li-left">
              <div>
                <img src="images/touxaing.png" alt=""></img>
                <dl>
                  <dt>{props.details.content}</dt>
                  <DD>{props.details.studentname}</DD>
                </dl>
              </div>
            </li>
          <li className="li-right">
            <div className="price">￥{props.details.price}.00</div>
            <DD>× 1</DD>
            <DD>小计： ￥{props.details.price}.00</DD>
          </li>
          </Ul>
          <div className="payway">
            <DD>支付方式</DD>
            <DD>微信方式</DD>
           </div>
        </BigUl>

        <PayButton> 
           <div>总计： ￥{props.details.price}.00</div>
           <span onClick={props.WxPay.bind(this)}>立即支付</span> 
        </PayButton>
      <img 
        className="show"
        src="images/paycode.png"
        alt="" 
        style={{display: props.showCode ? "block" : "none"}}
        ></img>
    </Pay>
  )
}
