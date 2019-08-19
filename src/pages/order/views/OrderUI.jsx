import React from 'react'
import {
  Order,
  Ul,
  Li,
  Span,
  I
} from './styledOrder'
import Header from '../../../components/header/Header'

export default (props) => {
  console.log(props.list);
  return(
    <Order>
        <Header name= '订单详情' link = '联系老师' to = '/message/chat'> 
        </Header>
        <Ul>
          <Li>
            <Span>距离上课时间</Span>
            <I>{parseFloat((new Date().getTime()-new Date(props.list.starttime).getTime())/1000/3600).toFixed(1)}小时</I>
          </Li>
          <Li>
            <Span>上课地点</Span>
            <I>{props.list.classaddress}</I>
          </Li>
          <Li>
            <Span>辅导内容</Span>
            <I>{props.list.content}</I>
          </Li>
          <Li>
            <Span>辅导价格</Span>
            <I>￥{props.list.price}</I>
          </Li>
          <Li>
            <Span>辅导时间</Span>
            <I>{props.list.starttime.replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日").slice(0,17)+"-"+props.list.endtime.replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日").slice(12,17)}</I>
          </Li>
          <Li>
            <Span>老师联系方式</Span>
            <I>15810089635</I>
          </Li>
          <Li>
            <Span>学生联系方式</Span>
            <I>18081006988</I>
          </Li>
          <Li>
            <Span>备注订单</Span>
            <I>{props.list.remark}</I>
          </Li>
        </Ul>
      </Order>
  )
}
