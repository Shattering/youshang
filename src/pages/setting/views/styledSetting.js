import styled from 'styled-components'
import border from '../../../assets/styles/border'
import arrow from '../../../assets/images/a5i.png'
const Setting = styled.div`
.body{
    .blank{
    height:.09rem;
    }
    ul{
    padding-left:.17rem;
    display:flex;
    background:#FFFFFF;
    flex-direction:column;
    }
}
`
const BorderLI = styled.li `
display:flex;
flex:1;
a{
  display:flex;
  width:100%;
  div{
    flex:1;
    display:flex;
    height:.4rem;
    align-items:center;
    font-size:.14rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    background:url(${arrow}) no-repeat 95% center;
    background-size:.09rem .15rem;
    }
}

  
`
const BorderedLI = border({
  component: BorderLI,
  borderWidth: '0 0 1px 0',
  borderColor: 'rgba(235,235,235,1)',
})


export  { Setting,BorderedLI }