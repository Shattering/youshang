import styled from 'styled-components'
const StyledHomeItem = styled.div`
    overflow: hidden; 
#scroll-wrap{
    height: 100%;
}
.home-item-wrap{
   margin:  .05rem .2rem;
   padding: .08rem .15rem .15rem;
   height: 1.20rem;
   background-color: #fff;
   font-family:PingFangSC-Heavy;
}
.home-item-wrap dt span{
    font-size: .16rem;
    font-weight: 500;
}
.home-item-wrap dt{
    height: .36rem;
    line-height: .36rem;
}
.home-item-wrap dd{
    height: .16rem;  
}
.home-item-wrap dd span{
    display: inline-block;
    margin-right: .12rem;
    background-color: #f6f6f6;
    font-size: .14rem;
    font-weight: 100;
}
.home-item-wrap dd .time{
    background-color: #fff;
}
.home-item-wrap .detail{
    background-color: #fff;
    color: #cacaca;
    font-weight: 100;
    /* position: relative; */

}
.home-item-wrap dd img{
    width: .25rem;
    height: .25rem;
    display: inline-block;
    
}
`
export default StyledHomeItem
