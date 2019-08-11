import styled from 'styled-components'

const ChatMessage = styled.div`
  widows : 100%;
  height : 100%;
  display : flex;
  flex-direction : column;
  .chatContainer{
    flex:1;
    border: solid 1px #000;
    display:flex;
    flex-direction:column;
    padding:0 .16rem;
    overflow: auto;
    .timer{
      padding:.1rem 0;
      width:100%;
      display:flex;
      justify-content:center;
      span{
        background:#fff;
        padding:0 .1rem;
        font-weight:400;
        color:rgba(82,82,82,1);
      }
    }
    .stu{
        flex-direction: row
      }
    .tea{
      flex-direction: row-reverse
    }
    .msg-box{
      display:flex;
      margin-bottom:.12rem;
      height:.4rem;
      line-height:.4rem;
      position: relative;
      .avator{
        img{
          border-radius:50%;
          width:.4rem;
          height:.4rem;
        }
      }
      .msg{
        padding:0 .08rem 0 .08rem;
        background:#fff;
      }
      /* .stuMsg{
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: red transparent transparent transparent ;
      }
      .teaMsg{
        width: 0;
        height: 0;
        border: 10px solid;
        border-color: red transparent transparent transparent ;
      } */
    }
  }
  .send{
    height:.49rem;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgba(245,245,246,1);
    border:1px solid rgba(215,215,217,1);
    .voice{
      width:.4rem;
      display:flex;
      justify-content:center;
      align-items:center;
      span{
        font-size:.27rem;
      }
    }
    .content{
      flex:1;
      height:.35rem;
      padding:0 .1rem;
      background:rgba(252,252,252,1);
      border:1px solid rgba(221,221,221,1);
      border-radius:3px;
    }
    .sendMsg{
      width:.7rem;
      padding:0 .05rem;
      border:none;
      background:rgba(245,245,246,1);
      display:flex;
      justify-content:center;
      align-items:center;
      span{
        width:100%;
        height:.35rem;
        line-height:.35rem;
        border:1px solid rgba(221,221,221,1);
        border-radius:3px;
      }
    }
  }
`

export {
  ChatMessage,
}