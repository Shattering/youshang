import React from 'react'
import {
  Message,
  Header,
  Ul,
  Li,
  Img,
  Messagenody,
  H3,
  Span,
  P
} from './StyledMessage'


export default () => {
  return(
    <Message className = 'message'>
        {/* <Header name = '消息'></Header> */}
        <Header>消息</Header>
        <Ul>
          <Li>
            <Img src="/images/touxiang.png" alt=""/>
            <Messagenody>
              <H3>周老师</H3>
              <Span>请问周五下午有没有时间？</Span>
            </Messagenody>
            <P>12:21</P>
          </Li>
          <Li>
            <Img src="/images/touxiang.png" alt=""/>
            <Messagenody>
              <H3>周老师</H3>
              <Span>请问周五下午有没有时间？</Span>
            </Messagenody>
            <P>12:21</P>
          </Li>
          <Li>
            <Img src="/images/touxiang.png" alt=""/>
            <Messagenody>
              <H3>周老师</H3>
              <Span>请问周五下午有没有时间？</Span>
            </Messagenody>
            <P>12:21</P>
          </Li>
        </Ul>
      </Message>
  )
}
