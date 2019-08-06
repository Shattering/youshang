import styled from 'styled-components'

const Order = styled.div`
  widows : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
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
`

const Ul = styled.ul`
  width : 100%;
  padding-left : .175rem;
  padding-right : .17rem;
  margin-top : .525rem;
`

const Li = styled.li`
  width : 100%;
  background : #fff;
  height : 1.05rem;
  margin-bottom : .045rem;
`


const Img = styled.img`

`

export {
  Order,
  Header,
  Ul,
  Li,
}