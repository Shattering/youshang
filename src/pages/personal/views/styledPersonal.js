import styled from 'styled-components'
import arrow from 'assets/images/a5i.png'
import border from 'assets/styles/border'

const Personal = styled.div `
    overflow:scroll;
    margin-top: .1rem;
    padding-bottom: .8rem;
    height: 100%;
`

const BorderLI = styled.div `
margin: 0 .16rem;
display:flex;
flex:1;
div,a{
  display:flex;
  width:100%;
  padding: 0;
  .am-list-line{
    justify-content: space-between;
    position: relative;
    padding:0;
    .am-list-content{
      font-size: .14rem;
    }
    .am-list-extra{
      color: #666;
      font-size: .14rem;
      text-align: right;
      width: 1.2rem;
      position: absolute;
      right:.4rem;
    }
  }
  .am-list-item{
    background: transparent;
  }
  input {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
      }
  p{
    color: #000;
    height:.4rem;
    flex:1;
    display:flex;
    align-items:center;
    font-size:.14rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    background:url(${arrow}) no-repeat right;
    background-size:.08rem .16rem;
    display:flex;
    direction:cursor;
    justify-content:space-between;
    img{
      width: .3rem;
      height:.3rem;
      margin-right: .4rem;
    }
    span{
      margin-right: .4rem;
      width: 1.2rem;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis ;
      color: #666;
    }
  }
}

`
const BorderedLI = border({
  component: BorderLI,
  borderWidth: '0 0 1px 0',
  borderColor: 'rgba(235,235,235,1)',
})

const Cover = styled.div`
  display:none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; 
  left: 0;
  background:rgba(0,0,0,0.4);
  z-index: 888;
  .chooseBox{
    position: absolute;
    top: 0; 
    left: 0;
    bottom: 0; 
    right: 0;
    margin: auto;
    width: 2.4rem;
    height: 1.2rem;
    background:#fff;
    border-radius: 8px;
    >p{
      text-align: center;
      line-height: .3rem;
    }
    .sexBox{
      display: flex;
      direction: cursor;
      div{
        flex: 1;
        padding-top: .15rem;
        text-align: center;
        img{
          width: .4rem;
        }
      }
    }
  }

`


export {
  Personal,
  BorderedLI,
  Cover
}