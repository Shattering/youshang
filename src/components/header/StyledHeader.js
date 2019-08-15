import styled from 'styled-components'
import settingbackground from '../../assets/images/setting-background.png'


const StyledHeader = styled.header`
    /* background:url(${settingbackground}); */
    /* background-size:100% .65rem; */
    /* height:.65rem; */
    width : 100%;
    background : #2492EB;
    height:.44rem;
    /* .fill{
        height:.24rem;
    } */
    .head{
        display:flex;
        align-items:center;
        p{  
            flex:1;
            height:.44rem;
            line-height : .44rem;
            text-align:center;
            font-size:.17rem;
            font-family:PingFangSC-Heavy;
            font-weight:500;
            color:rgba(255,255,255,1);
            span{
                position: fixed;
                right : .19rem;
                top : .14rem;
                z-index : 1;
                font-size : .16rem;
                font-family : PingFangSC-Heavy;
                font-weight : 400;
                color : #fff;
                line-height : .16rem;
            }
        }
        img{
            position:absolute;
            left:.19rem;
            /* margin-top:.07rem; */
            margin-top:.145rem;
            height:.15rem;
            width:.09rem;
        }
    }
`

export  { StyledHeader }