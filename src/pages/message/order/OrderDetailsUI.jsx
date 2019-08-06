import React from 'react'
import {
  Order,
  Header,
  Ul,
  Li,
  Span,
  I
} from './StyledOrderDetails'
import {
  Link
} from 'react-router-dom'

export default () => {
  return(
    <Order>
        <Header>
          <button>
            《
          </button>
          订单详情
          <Link to="/message/chat">
            <span>联系老师</span>
          </Link>
        </Header>
        <Ul>
          <Li>
            <Span>距离上课时间</Span>
            <I>09:00-11:20</I>
          </Li>
          <Li>
            <Span>上课地点</Span>
            <I>北京海淀区弘扬18教师</I>
          </Li>
          <Li>
            <Span>辅导内容</Span>
            <I>小学语文</I>
          </Li>
          <Li>
            <Span>辅导价格</Span>
            <I>￥120</I>
          </Li>
          <Li>
            <Span>辅导时间</Span>
            <I>2019-6月15-9月11</I>
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
            <I></I>
          </Li>
        </Ul>
      </Order>
  )
}
