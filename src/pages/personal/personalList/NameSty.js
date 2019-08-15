import styled from 'styled-components'

const NameUI = styled.div`
  height: 100%;
  width:100%;
  background:#fff;
  >p{
    padding: 0 .16rem;
    line-height:.3rem;
  }
  .item-box{
    display: flex;
    direction: column;
    justify-content: space-between;
    >input{
      outline:none;
      border:0;
      font-size:.16rem;
    }
    img{
      width: .2rem;
      height: .2rem;
    }
  }
`

export default NameUI