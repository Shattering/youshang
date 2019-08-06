import styled from 'styled-components'

const Order = styled.div`
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
  margin-bottom : .095rem;
`

const Ul = styled.ul`
  width : 100%;
  padding-left : .165rem;
  background : #fff;
`

const Li = styled.li`
  width : 100%;
  display : flex;
  height : .405rem;
  border-bottom : 1px solid #EBEBEB;
  padding-top : .12rem;
`


const Span = styled.span`
  flex : 1;
  width : 100%;
  height : .14rem;
  font-size : .14rem;
  line-height : .14rem;
  text-align : left;
  font-family : PingFangSC-Medium;
  font-weight : 500;
  padding-left :.02rem;
  color : #525252;
`
const I = styled.i`
  flex : 1;
  height : .14rem;
  font-size : .14rem;
  line-height : .14rem;
  color : #BDBDBD;
  font-family : PingFangSC-Medium;
  font-weight : 500;
  text-align : right;
  padding-right : .175rem;
`

export {
  Order,
  Header,
  Ul,
  Li,
  Span,
  I
}