import styled from 'styled-components'
import username from '../../../../assets/images/我的.png'
import password from '../../../../assets/images/密码.png'

const StyledVerificationCodeLogin = styled.div`
  background:#ffffff;
  height:100%;
  main{
    .logo{
    padding-top:.47rem;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
      height:.56rem;
      width:.56rem;
    }
    h1{
      font-size:.36rem;
      font-family:WeibeiSC-Bold;
      font-weight:400;
      color:rgba(0,0,0,1);
      padding-left:.15rem;
    }
  }
 
  .form{
    display:block;
    text-align:center;
    position: relative;
    input{
        display:block;
        width:82%;
        margin:0 auto;
        height:.49rem;
        border-top:none;
        border-left:none;
        border-right:none;
        padding-left:.31rem;
    }
    button{
      position:absolute;
      z-index:100;
      top:.1rem;
      right:10%;
      width:1rem;
      height:.3rem;
      background:#ffffff;
      border:1px solid #86D6A5;
      border-radius:.4rem;
      font-size:.14rem;
      color:#86D6A5;
    }
    input:nth-of-type(1){
      margin-top:.40rem;
      background:url(${username}) no-repeat left center;
      background-size:.22rem .21rem;
    }
    input:nth-of-type(2){
      background:url(${password}) no-repeat left center;
      background-size:.22rem .21rem;
    }
  }
  p{
    width:82%;
    margin:0 auto;
    font-size:.14rem;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(155,155,155,1);
    line-height:.22rem;
    padding-top:.12rem;
    span{
      color:#86D6A5
    }
  }
  .confirm{
    text-align:center;
    button{
        width:3.05rem;
        height:.45rem;
        margin-top:.44rem;
        background:#cbcbcb;
        border:none;
        border-radius:.4rem;
        font-size:.2rem;
        font-family:SourceHanSansCN-Bold;
        font-weight:bold;
        color:rgba(255,255,255,1);
        letter-spacing:.1rem;
    }
  }
  }
  
  footer{
    .p1{
      display:block;
      text-align:center;
      padding-top:.32rem;
    }
    div{
      padding-top:.16rem;
      display:flex;
      justify-content: center; /* 水平居中 */
      align-items: center; 
      width:100%;
      img{
        width:.27rem;
        height:.22rem;
      }
      p{
        font-size:.13rem;
        font-family:PingFangSC-Regular;
        font-weight:400;
      }
    }
  }
`


export {
  StyledVerificationCodeLogin
}