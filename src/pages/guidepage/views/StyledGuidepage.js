import styled from 'styled-components'

const Guidepage = styled.div`
  height:100%;
  width:100%;
  background:#dbeeff;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  .am-carousel{
    height:100% !important;
    width:100% !important;
    .slider-frame{
      height:100% !important;
      width:100% !important;
      .slider-list{
        height:100% !important;
        width:100% !important;
        .slider-slide{
          height:100% !important;
          width:100% !important;
          i{
            display:flex !important;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            p{
              flex:1;
              display:flex;
              flex-direction:column;
              justify-content:center;
              align-items:center;
              span{
                font-size:24px;
                color:#68aaf9;
              }
            }
            img{
              flex:1;
              display:block;
            }
            .choose{
              flex:1;
              width:100%;
              padding-top:.36rem;
              p{
                width:100%;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:row;
                button{
                  width:1.02rem;
                  height:.39rem;
                  margin:0 .3rem;
                  background:#68aaf9;
                  color:#fff;
                  border:none;
                  font-size:.24rem;
                }
              }
            }
          }
        }
      }
    }
  }
  .slider-decorator-0{
    bottom:.6rem !important;
    .am-carousel-wrap-dot{
      padding:0 .02rem;
    }
    .am-carousel-wrap-dot-active{
      span{
        background:#5597f7 !important;
      }
    }
  }
`

export {
  Guidepage
}