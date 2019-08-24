import styled from 'styled-components'
const StyledHomeItem = styled.div`
    overflow: hidden; 
    height: 100% !important;
#scroll-wrap{
    height: 100%;
}
.home-item-wrap{
   height: auto;
   background-color: #fff;
   margin:  .08rem .2rem;
   padding: .1rem .15rem .15rem;
   font-family:PingFangSC-Heavy;
}
.home-item-wrap dt span{
    font-size: .18rem;
    font-weight:800;
   color:rgba(82,82,82,1);
}
.home-item-wrap dt{
    height: .4rem;
    line-height: .4rem;
    margin-bottom: .08rem;
}
.home-item-wrap dt img{
    height: .18rem;
    margin-left: .1rem;
    margin-top: -.04rem;

}
.home-item-wrap dd {
    height: auto;  
}
.home-item-wrap dd span, .experience{
    display: inline-block;
    margin-right: .12rem;
    background-color: #f6f6f6;
    font-size: .14rem;
    font-weight: 100;
    padding:0 .05rem ;
}
.experience{
    margin-top: .1rem;
    margin-left: .1rem;
}
.home-item-wrap dd .time{
    background-color: #fff;
    font-size:.14rem;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(82,82,82,1);
}
.home-item-wrap .detail{
    background-color: #fff;
    color: #cacaca;
    font-weight: 100;
    flex: 1;

}
.home-item-wrap .detail i{
    display: inline-block;
    font-weight: 600;
    margin-left: .1rem;
}
.home-item-wrap dd div{
   display: flex;
   align-items: center;
}
.home-item-wrap dd div{
   flex: 4;
}
.person-src{
     margin-top: .12rem;
      height: .26rem;
    font-size: .14rem;
    font-weight:500;
    color:rgba(189,189,189,1);
}
.home-item-wrap dd img{
    height: .26rem;
    line-height: .26rem;
    display: inline-block; 
    margin-right: .08rem;  
}
`
export default StyledHomeItem
