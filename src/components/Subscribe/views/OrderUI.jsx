import React from 'react'
import { Button } from 'antd';
import {Link} from 'react-router-dom'
import {
  Order,
  Ul,
  Li,
  Span,
  I
} from './styledOrder'
import HeaderToHome from '../../../components/header/HeaderToHome'

export default (props) => {
  return(
   
    <Order>
        <HeaderToHome name= '订单详情' link ={parseInt(localStorage.type)=== 1? "联系学生" : "联系老师"} to = '/message/chat'> 
        </HeaderToHome>
        <Ul>
          <Li>
            <Span>距离上课时间</Span>
            <I>{props.details.starttime}-{props.details.endtime}</I>
          </Li>
          <Li>
            <Span>上课地点</Span>
            <I>{props.details.classaddress}</I>
          </Li>
          <Li>
            <Span>辅导内容</Span>
            <I>{props.details.content}</I>
          </Li>
          <Li>
            <Span>辅导价格</Span>
            <I>{props.details.price}</I>
          </Li>
          <Li>
            <Span>辅导时间</Span>
            <I>{props.details.data}</I>
          </Li>
          <Li>
            <Span>老师联系方式</Span>
            <I>{props.details.teacherphone}</I>
          </Li>
          <Li>
            <Span>学生联系方式</Span>
            <I>{props.details.studentphone}</I>
          </Li>
          <Link to={{
              pathname: `/writeComments/:${props.details.id}`,
              state:{
                detail: props.details,
                orderstatic: props.orderstatic,
                remarks: props.remarks
              }
            }}>
              <Li><Span>{props.orderstatic!=='2'? '备注订单':'修改备注'}</Span> <I >&gt;&gt;&gt;</I></Li>
          </Link>

          { props.buttonDisplay? 
          <Li>
            <Span>完成订单</Span>
            <I >&gt;&gt;&gt;</I>
          </Li>
          :
          ''
          }
        </Ul>
        { props.buttonDisplay? 
          <Button onClick={props.PayOrder.bind(this,props.details)}>去支付</Button>
         :
        <Button  onClick={props.conformOrder.bind(this,props.details.id)}>预约订单</Button>
        }
      </Order>
  )
}
