
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
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
          </dl>
          <dl className="home-item-wrap" >
              <dt> <span>物理 英语</span> <i>tupian</i> </dt>
              <dd>
                  <div>
                      <span>教学四年</span>
                      <span>本科</span>
                      <span className="time">8:00-10:00</span>
                      <span className="detail">详情 &gt;</span>
                  </div>
             </dd>
              <dd className="detail"><img alt="" src="../../assets/images/touxiang.png"></img> 徐小明</dd>
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