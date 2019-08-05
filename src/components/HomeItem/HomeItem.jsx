
import React from 'react'
import BScroll from 'better-scroll'
import StyledHomeItem from './StyledHomeItem'
class HomeItem extends React.Component{
   render() {
       return(
       <StyledHomeItem>
        <div id="scroll-wrap">
         <div>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <img src="images\rongyuqiang@3x(1).png" alt=""></img> </dt>
              <dd>
                  <div>
                      <div className="item-left">
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8: 00~10: 00</span>
                      </div>
                      <div className="detail">详情 <i>&gt;</i></div>
                  </div>
             </dd>
              <dd className="person-src"><img alt="" src="images/touxaing.png"></img> 徐小明</dd>
          </dl>
          </div>
          </div>
        </StyledHomeItem>

       )
   }

   componentDidMount() {
    this.bScrollLeft = new BScroll('#scroll-wrap')
   
  }
}

export default HomeItem