import React from 'react'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

 import StyledSwiper from './StyledSwiper'
import Img1 from 'assets/images/swiper1.png'
import Img2 from 'assets/images/swiper2.png'
 import Img3 from 'assets/images/swiper3.png'

//  import Img1 from 'assets/images/swiper1@2x.png'
// import Img2 from 'assets/images/swiper2@2x.png'
//  import Img3 from 'assets/images/swiper3@2x.png'
 
// import Img11 from 'assets/images/swiper1@3x.png'
// import Img21 from 'assets/images/swiper2@3x.png'
// import Img31 from 'assets/images/swiper3@3x.png'
import './swiper.css'
class mySwiper extends React.Component {
  // state = {
  //   data: [Img11, Img2, Img31],
  //   imgHeight: 134,
  // }
  componentDidMount() {

     new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,//1秒切换一次
       
      },
      
      effect : 'coverflow',
      centeredSlides: true,
      spaceBetween: '0.8%',
      slidesPerView: 3,
      loop: true,
      loopedSlides: 2,
      coverflowEffect: {
          rotate: 0,
          stretch: 50,
          depth: 1000,
          modifier: 0.5,
          slideShadows: false,
      } 
    });
  }
  render() {
    return (
      <StyledSwiper>
        <div className="bigheader">
          <header>Hi,下午好</header>
         
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={Img1} 
                  style={{
                    width: 220,
                    height: 123 
                  }} 
                alt=""></img></div>
                <div className="swiper-slide"><img src={Img2}  style={{
                    width: 220,
                    height: 123 
                  }} alt=""></img></div>
                <div className="swiper-slide"><img src={Img3}  
                 style={{
                    width: 220,
                    height: 123 
                  }} alt=""></img></div>
              </div>
              <div className='swiper-pagination'></div>
            </div>
         </div>
        
      </StyledSwiper>
    )
  }
}

export default mySwiper