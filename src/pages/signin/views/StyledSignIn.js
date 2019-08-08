import styled from 'styled-components'
import phone from '../../../assets/images/手机.png'
import safe from '../../../assets/images/安全.png'
import code2 from '../../../assets/images/密码2.png'
import code1 from '../../../assets/images/密码1.png'

const StyledSignIn = styled.div`
  background:#ffffff;
  height:100%;
  main{
  form{
    display:block;
    text-align:center;
    position: relative;
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
      background:url(${phone}) no-repeat left center;
      background-size:.22rem .21rem;
    }
    input:nth-of-type(2){
      background:url(${safe}) no-repeat left center;
      background-size:.22rem .21rem;
    }
    input:nth-of-type(3){
      background:url(${code2}) no-repeat left center;
      background-size:.22rem .21rem;
    }
    input:nth-of-type(4){
      background:url(${code1}) no-repeat left center;
      background-size:.22rem .21rem;
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
`


export {
  StyledSignIn
}