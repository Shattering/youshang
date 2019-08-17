import React from 'react'
import {
  Order,
  Ul,
  Li,
  Span,
  I
} from './styledOrder'
import Header from '../../header/Header'

export default (props) => {
  return(
   
    <Order>
        <Header name= '订单详情' link ={parseInt(localStorage.type)=== 1? "联系学生" : "联系老师"} to = '/message/chat'> 
        </Header>
        <Ul>
          <Li>
            <Span>上课时间</Span>
            <I></I>
          </Li>
          <Li>
            <Span>上课地点</Span>
            <I ></I>
          </Li>
          <Li>
            <Span>辅导内容</Span>
            <I></I>
          </Li>
          <Li>
            <Span>辅导价格</Span>
            <I></I>
          </Li>
          <Li>
            <Span>辅导日期</Span>
            <I></I>
          </Li>
          <Li>
            <Span>学生联系方式</Span>
            <I></I>
          </Li>
          <Li>
            <Span>备注订单</Span>
            <I></I>
          </Li>
          {/* <Link to={{
              pathname: `/writeComments/:${props.details.id}`,
              state:{
                detail: props.details,
                orderstatic: props.orderstatic,
                remarks: props.remarks
              }
            }}>
              <Li><Span>{props.orderstatic!=='2'? '备注订单':'修改备注'}</Span> <I >&gt;&gt;&gt;</I></Li>
          </Link> */}

          {/* { props.buttonDisplay? 
          <Li>
            <Span>完成订单</Span>
            <I >&gt;&gt;&gt;</I>
          </Li>
          :
          ''
          } */}
        </Ul>
        {/* { props.buttonDisplay? 
          <Button onClick={props.PayOrder.bind(this,props.details)}>去支付</Button>
         :
        <Button  onClick={props.conformOrder.bind(this,props.details.id)}>预约订单</Button>
        } */}
      </Order>
  )
}
