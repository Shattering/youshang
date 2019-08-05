import styled from 'styled-components'
const StyledFindItem = styled.div`
    /* overflow: hidden; 
#scroll-wrap{
    height: 100%;
} */
#scroll-wrap-find{
    height: 100%;
}
.find-item-wrap{
   height: auto;
   background-color: #fff;
   margin:  .1rem .2rem;
   padding: .1rem .15rem .15rem;
   font-family:PingFangSC-Heavy;
}
.find-item-wrap p{
    font-size: .18rem;
    height: .32rem;
    font-weight: 550;
   color:rgba(82,82,82,1);
}
.find-item-wrap ul{
    display: flex;
   height: .3rem;
   line-height: .35rem;
}
.find-item-wrap ul .item-left{
    flex: 4;
    height:.25rem;
    font-size:.14rem;
    font-weight:550;
    color:rgba(189,189,189,1);
}
.find-item-wrap ul .name{
   
    font-weight:300;
}
.find-item-wrap ul .name img{
  height: .26rem;
  margin-right: .1rem;
}
.find-item-wrap ul .km{
    font-size:.12rem;
    font-weight:  100;
    padding-left: .4rem;
}
.find-item-wrap ul .item-right{
    flex: 1;
    color:rgba(189,189,189,1);
   
}
.find-item-wrap ul .item-right i{
    color: #5d83fe;
    font-weight:550;
}
`
export default StyledFindItem
