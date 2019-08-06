import styled from 'styled-components'

const OrderCenter = styled.div`
  widows : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  ul{
    width : 100%;
    padding-left : .175rem;
    padding-right : .17rem;
    li{
      width : 100%;
      display : flex;
      height : 1.05rem;
      background : #fff;
      padding-left : .08rem;
      img{
        width : .385rem;
        height : .385rem;
      }
    }
  }
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
  margin-bottom : .525rem;
`


export {
  OrderCenter,
  Header
}