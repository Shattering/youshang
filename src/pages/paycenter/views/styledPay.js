import styled from 'styled-components'

const Pay = styled.div`
  widows : 100%;
  height : 100%;
  background: #f9f8f9;
  position: relative;
   .show{
    position: relative;
    width: 3.2rem;
    top: -2rem;
    left: 0.3rem;
     
  }
  .payway{
    display: flex;
    margin-top: .2rem;
    justify-content: space-between;
    dd{
       font-size: .15rem !important;
    }
  }
  .price{
    font-size: .15rem;
    font-family:PingFangSC-Regular;
    font-weight:400;
    margin-top: .05rem;
    color:rgba(82,82,82,1); 
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
const BigUl = styled.div`
  height: auto;
  margin: .12rem .15rem;
  background : #fff;
  border-radius: .1rem;
  display: flex;
  flex-direction: column;
  padding: .1rem .18rem .16rem;
`
const Ul = styled.ul` 
   flex: 1;
   display: flex;
    li{
      flex: 1;
    }
    .li-left{
      display: flex;
      flex-direction: column;
        div{
          display: flex;
        }
        img{
            width:.68rem;
            height:.68rem
        }
        dl{
          flex: 1;
          padding-top: .1rem;
          padding-left: .16rem; 
          font-family:PingFangSC-Medium;
          dt{
            font-size: .15rem;
            font-weight:800;
            color:rgba(82,82,82,1);
          }
      }
    }
    .li-right{
      display: flex;
      flex-direction: column;
     justify-content: center;
      align-items: flex-end;     
    }
`

const DD = styled.dd`
  margin-top: .1rem;
  font-size: .12rem;
  font-weight:500;
  color:rgba(189,189,189,1);
`
 const PayButton = styled.div`
  height: .5rem;
  margin: 0 .15rem;
  background : #fff;
  border-radius: .1rem;
  display: flex;
  padding: 0 .18rem ;
  align-items: center;
  justify-content: space-between;   
  font-size: .17rem;
  color: #6da5f6;
  span{
    display: inline-block;
    padding: 0 .05rem;
    background-color: #5d83fe;
    color: #fff;
    font-size: .16rem;
  }

 `

export {
  Pay,
  Header,
  BigUl,
  Ul,
  DD,
  PayButton
}