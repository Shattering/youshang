import styled from 'styled-components'

const OrderHome = styled.div`
  width : 100%;
  height : 100%
`


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
      margin-bottom : .045rem;
      img{
        width : .385rem;
        height : .385rem;
        margin-top : .255rem;
      }
      .orderbody{
        width : 100%;
        .bodytop{
          flex : 1;
          padding-left : 0.105rem;
          margin-bottom : .08rem;
          div{
            width : 100%;
            display : flex;
            padding-top : .165rem;
            margin-bottom :.04rem;
            span{
              flex : 1;
              display : block;
              height : .14rem;
              line-height : .14rem;
              font-size : .14rem;
              font-family : PingFangSC-Medium;
              font-weight : 500;
              color : #BDBDBD;
            }
            .spanbottom{
              text-align : right;
              padding-right : .305rem;
            }
          }
          >span{
            display : block;
            width : 100%;
            height : .14rem;
            line-height : .14rem;
            font-size : .14rem;
            font-family : PingFangSC-Medium;
            font-weight : 500;
            color : #BDBDBD;
            margin-bottom : .09rem;
          }
          p{
            width : 100%;
            height : .14rem;
            line-height : .14rem;
            font-size : .14rem;
            font-family : PingFangSC-Medium;
            font-weight : 500;
            color : #BDBDBD;
          }
        }
        .bodybottom{
          width : 100%;
          height : .14rem;
          line-height : .14rem;
          font-size : .14rem;
          font-family : PingFangSC-Medium;
          font-weight : 500;
          color : #BDBDBD;
          text-align : right;
          padding-right :.21rem;
        }
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
  /* margin-bottom : .525rem; */
`


export {
  OrderHome,
  OrderCenter,
  Header
}