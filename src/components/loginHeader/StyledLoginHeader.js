import styled from 'styled-components'

import border from '../../assets/styles/border'

const StyledLoginHeader = styled.header`
    height: .65rem;
    background: #ffffff;
    
    .fill{
        height:.34rem;
    }
    .container{
        display:flex;
        height:.17rem;
            img{
            position:absolute;
            height:.17rem;
            width:.10rem;
            left:.15rem;
            top:.33rem;
            }
            a{
                flex:1;
                p{  
                font-size:.17rem;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(82,82,82,1);
                text-align:right;
                line-height:10px;
                }
                .p1{
                    position:absolute;
                    right:38%;
                }
                .p2{
                    position:absolute;
                    right:5%;
                }
            }
            
    }
    
`
const BorderedHeader = border({
    component: StyledLoginHeader,
    borderWidth: '0 0 1px 0',
    borderColor: 'rgba(248,248,248,1)',
  })


export { BorderedHeader }