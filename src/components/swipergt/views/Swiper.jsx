import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import StyledSwiper from './StyledSwiper'
// import Img1 from 'assets/images/swiper1.png'
import Img2 from 'assets/images/swiper2.png'
// import Img3 from 'assets/images/swiper3.png'
import Img11 from 'assets/images/swiper1@3x.png'
import Img21 from 'assets/images/swiper2@3x.png'
import Img31 from 'assets/images/swiper3@3x.png'
import './swiper.css'
class mySwiper extends React.Component{
  state = {
    data: [Img11, Img2, Img31],
    imgHeight: 134,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [Img11, Img21, Img31],
      });
    }, 6000);
  }
   render() {
       return(
         <StyledSwiper>
      <div className="bigheader">
        <header>Hi,下午好</header>
        <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={0}
          slideWidth={0.78}
          dots={false}
          autoplay
          infinite
          afterChange={index => this.setState({ slideIndex: index })}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{
                display: 'block',
                position: 'relative',
                top: this.state.slideIndex === index ? -12 : 0,
                height: 'auto' ,
              }}
            >
              <img
                src={`${val}`}
                alt={index}
                style={{ width: '100%', verticalAlign: 'top',
                height: this.state.slideIndex === index ? 134 : 110,
                zIndex: this.state.slideIndex === index ? 9999 : 0
              
              }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                   this.setState({ imgHeight: this.state.imgHeight });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
      </StyledSwiper>
       )
   }
}

export default mySwiper