import styled from 'styled-components'

const Message = styled.div`
  widows : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
`

const Header = styled.div`
  width : 100%;
  height : .44rem;
  background : #2492EB;
  text-align : center;
  line-height : .44rem;
  color : #fff;
  font-family : Adobe Heiti Std R;
  font-weight : 400;
  font-size : .17rem;
`

const Ul = styled.ul`
  width : 100%;
  padding-left : .105rem;
  background : #fff;
`

const Li = styled.li`
  width : 100%;
  height : .68rem;
  display : flex;
  border-bottom : 1px dashed #333;
  padding-left : .0505rem;
`

const Img = styled.img`
  width : .38rem;
  height : .38rem;
  margin-top : .155rem;
`

const Messagenody = styled.div`
  width : 2.78rem;
  height : 100%;
  padding-left : .16rem;
  padding-top : .15rem;
`
const H3 = styled.h3`
  width : 100%;
  height : .16rem;
  line-height : .16rem;
  text-align : left;
  color : #000;
  font-size : .17rem;
  font-family : PingFangSC-Regular;
  font-weight : 400;
  margin-bottom : .09rem;
`

const Span = styled.span`
  width : 100%;
  height : .14rem;
  font-size : .14rem;
  text-align : left;
  font-family : PingFangSC-Regular;
  font-weight : 400;
  color : #AAAAAA;
`
const P = styled.p`
  height : 100%;
  font-size : .12rem;
  color : #BFBFBF;
  font-family : PingFangSC-Regular;
  font-weight : 400;
  text-align : left;
  padding-top : .135rem;
`

export {
  Message,
  Header,
  Ul,
  Li,
  Img,
  Messagenody,
  H3,
  Span,
  P
}