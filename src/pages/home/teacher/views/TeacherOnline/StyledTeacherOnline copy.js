import styled from 'styled-components'

const Online = styled.div`
 height: 100%;
 padding: 0 .2rem; 
 font-family:PingFangSC-Medium;
  .online{
    height: .35rem;
    font-size: .14rem;
    line-height: .35rem;
    font-weight: 600;
    background-color: #fff;
    padding: 0 .15rem;
    border-radius: .05rem;
    color: #525252;
    display: flex;
    align-items: center;
    /* margin-bottom: .16rem; */
    span{
        display: inline-block;
        flex: 1; 
    }
    .switch-button{
        height: .22rem;
        width: .35rem;
    }
    .ant-switch::after {
        height: .17rem;
        width: .17rem;
    } 
  } 

  .sliders{
    background-color: #fff;
    height: 3rem; 
    border-radius: .1rem;
    padding: 0 .12rem;
    .ant-slider-handle {
    position: absolute;
    width: 18px;
    height: 18px;
    margin-top: -7px;
    margin-left: -7px;
    background-color: #5699f7;
    border: 0!important;
    }
    .ant-col-24 {
      width: 94%;
     padding-left: .2rem;
     position: absolute;
     top: -.26rem;
     .time-src1{
         width: .25rem;
         position: relative;
         left: -.21rem;
         top: .31rem;
     }
     .time-src2{
         width: .25rem;
        position: relative;
        right: -2.7rem;
        top: -0.29rem;
     }
    }
    .time-sliders-tip{
       padding-top: .36rem;
       display: flex;
       align-items: center;
       font-size: .16rem;
        font-weight:400;
        color:rgba(94,94,94,1);
        margin-bottom: .12rem;
       span{
            display: inline-block;
            flex: 1;   
       }
       div{
        flex: 1;  
        text-align: right;
       }
    }
  }
`
export {
    Online,
}