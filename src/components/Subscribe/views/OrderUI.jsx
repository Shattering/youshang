import React from 'react'
import { Button } from 'antd';
import {
  Order,
  Ul,
  Li,
  Span,
  I
} from './styledOrder'
import Header from '../../../components/header/Header'

export default (props) => {
  return(
    <Order>
        <Header name= '订单详情' link ={localStorage.type>0? "联系学生" : "联系老师"} to = '/message/chat'> 
        </Header>
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
          <Li>
            <Span>备注订单</Span>
            <I onClick={props.writeComments.bind(this,props.details.id)}>&gt;&gt;&gt;</I>
          </Li>

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
        ''
         :
        <Button  onClick={props.conformOrder.bind(this)}>预约订单</Button>
        }
      </Order>
  )
}
