import styled from 'styled-components'
import code2 from '../../../assets/images/密码2.png'
import code1 from '../../../assets/images/密码1.png'

const StyledResetCode = styled.div`
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
      background:url(${code2}) no-repeat left center;
      background-size:.22rem .21rem;
    }
    input:nth-of-type(2){
      background:url(${code1}) no-repeat left center;
      background-size:.22rem .21rem;
    }
  }
  .next{
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
  
`


export {
  StyledResetCode
}