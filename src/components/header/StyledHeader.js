import styled from 'styled-components'
import settingbackground from '../../assets/images/setting-background.png'

const StyledHeader = styled.header`
    background:url(${settingbackground});
    background-size:100% .65rem;
    height:.65rem;
    .fill{
        height:.24rem;
    }
    .head{
        display:flex;
        align-items:center;
        p{  
            
            flex:1;
            height:.32rem;
            text-align:center;
            font-size:.17rem;
            font-family:PingFangSC-Heavy;
            font-weight:500;
            color:rgba(255,255,255,1);
        }
        img{
            position:absolute;
            left:.19rem;
            margin-top:.07rem;
            height:.15rem;
            width:.09rem;
        }
    }
`

export  { StyledHeader }