import React from 'react'
import StyledHomeItem from './StyledHomeItem'
export default (props) => {
    return(
        <StyledHomeItem>
         <div id="scroll-wrap">
          <div>
              {
                props.list? props.list.map(value => (
                <dl className="home-item-wrap" key={value.id} onClick={props.toDetail.bind(this,value.id)}>
                 <dt> <span>{value.begoodat}</span> <img src="/images\rongyuqiang@3x(1).png" alt=""></img> </dt>
                 <dd>
                     <div>
                         <div className="item-left">
                         <span>{value.certification}</span>
                         <span>{value.education}</span>
                         </div>
                        
                         <div className="detail">详情 <i>&gt;</i></div>
                     </div>
                      <span className="experience">{value.experience} </span>
                 </dd>
                 <dd className="person-src"><img alt="" src="/images/touxaing.png"></img> {value.tname}</dd>
                 </dl>  
                 )):''
         }
           </div>
         </div>
         </StyledHomeItem>
 
        )
}