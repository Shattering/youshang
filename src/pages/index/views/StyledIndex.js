import styled from 'styled-components'

const Index = styled.div`
  display:flex;
  flex-direction:column;
  height:100%;
  width:100%;
`
const Main = styled.div`
  flex:1;
`
const Nav = styled.div`
  height:.49rem;
  background:#fff;
  display:flex;
`
const NavItem = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  img{
    width:.22rem;
    height:.22rem;
  }
  span{
    font-weight:400;
    font-size:.12rem;
    line-height:.18rem;
    transform:scale(0.8);
    color:rgba(53,53,53,1);
  }
`

export {
  Index,
  Main,
  Nav,
  NavItem
}