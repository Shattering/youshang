import styled from 'styled-components'
import arrow from '../../../assets/images/a5i.png'
import background from '../../../assets/images/background.png'
import border from '../../../assets/styles/border'
import adi from '../../../assets/images/adi.png'
import ada from '../../../assets/images/ada.png'
import a43 from '../../../assets/images/a43.png'
const Mine = styled.div `
  background:#F0F2F5;
  height:100%;
  header{
    width:100%;
    height:2.02rem;
    background:url(${background}) no-repeat;
    background-size:100% 2.02rem;
    .fill{
      height:.53rem;
    }
    .pic{
      display:flex;
      width:100%;
      justify-content: center;
      img{
        height:.58rem;
        width:.58rem;
      }
    }
    .p1{
      text-align:center;
      font-size:.17rem;
      font-family:PingFangSC-Heavy;
      font-weight:800;
      color:rgba(255,255,255,1);
      padding-top:.06rem;
    }
    .p2{
      text-align:center;
      font-size:.1rem;
      font-family:PingFangSC-Heavy;
      font-weight:800;
      color:rgba(255,255,255,1);
      
    }
  }  
  .body{
      .blank{
        height:.19rem;
      }
      ul{
      padding-left:.2rem;
      display:flex;
      background:#FFFFFF;
      flex-direction:column;
        li:nth-of-type(1)>a>i{
          background:url(${adi}) no-repeat center center;
          background-size: .2rem .2rem;
        }
        li:nth-of-type(2)>a>i{
          background:url(${ada}) no-repeat;
          background-size: .2rem .2rem;
        }
        li:nth-of-type(3)>a>i{
          background:url(${a43}) no-repeat;
          background-size: .2rem .2rem;
        }
      }
  }
 
`
const BorderLI = styled.li `
display:flex;
flex:1;
a{
  display:flex;
  width:100%;
  i{
    margin-top:.1rem;
    width:.2rem;
    height:.2rem;
    margin-right:.08rem;
  } 
  div{
    height:.4rem;
    flex:1;
    display:flex;
    align-items:center;
    font-size:.14rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    background:url(${arrow}) no-repeat 95% center;
    background-size:.12rem .21rem;
    }
}

  
`
const BorderedLI = border({
  component: BorderLI,
  borderWidth: '0 0 1px 0',
  borderColor: 'rgba(235,235,235,1)',
})


export {
  Mine,
  BorderedLI
}