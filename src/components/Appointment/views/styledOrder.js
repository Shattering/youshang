import styled from 'styled-components'

const Order = styled.div`
  widows : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  .ant-btn, .ant-btn:hover, .ant-btn:focus, .ant-btn:active, .ant-btn.active{
  height: 0.4rem;
  width: 1.3rem;
  font-size: .14rem;
  line-height: .32rem;
  background-color: #5597f7;
  color: #fff;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  margin: .12rem auto;
  border-radius: .05rem;
  border: 0;
}
`

const Header = styled.div`
  width : 100%;
  height : .44rem;
  background-color : #5597f7 !important;
  text-align : center;
  line-height : .44rem;
  color : #fff;
  font-family : Adobe Heiti Std R;
  font-weight : 400;
  font-size : .17rem;
  margin-bottom : .095rem;
  position: relative;
  img{
    position:absolute;
    left:.19rem;
    margin-top:.145rem;
    height:.15rem;
    width:.09rem;
  }
  span{
    position: absolute;
    left : 2.47rem;
    top : .14rem;
    z-index : 1;
    display : block;
    width : 1.28rem;
    font-size : .16rem;
    font-family : PingFangSC-Heavy;
    font-weight : 400;
    color : #fff;
    text-align : right;
    height : .16rem;
    line-height : .16rem;
    padding-right : .175rem;
  }
`

const Ul = styled.ul`
  width : 100%;
  padding-left : .165rem;
  background : #fff;
`

const Li = styled.li`
  width : 100%;
  display : flex;
  height : .48rem;
  align-items: center;
  border-bottom : 1px solid #EBEBEB;
  /* padding-top : .12rem; */
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
const Button = styled.button`
   height: 0.4rem;
  width: 1.3rem;
  font-size: .14rem;
  line-height: .32rem;
  background-color: #5597f7;
  color: #fff;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: center;
  margin: .12rem auto;
  border-radius: .05rem;
  border: 0;
`
export {
  Order,
  Header,
  Ul,
  Li,
  Span,
  I,
  Button
}