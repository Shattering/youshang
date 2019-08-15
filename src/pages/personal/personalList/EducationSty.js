import styled from 'styled-components'
import edu from 'assets/images/edu.png'

const EducationUI = styled.div`
  p{
    margin: .1rem .2rem;
    line-height: .4rem;
    display: flex;
    justify-content: space-between;
    span{
      background:#A6D5FC;
      border-radius: 4px;
      padding: 0 .1rem;
    }
  }
  .edubox{
    position: relative;
    input {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
  }
  .img{
    width: 2.4rem;
    height: 2rem;
    background: url(${edu}) no-repeat center;
    background-size: 2.4rem 1.6rem;
    margin: 0 auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
`

export default EducationUI