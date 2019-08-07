import styled from 'styled-components'

const ChatMessage = styled.div`
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



export {
  ChatMessage,
  Header
}