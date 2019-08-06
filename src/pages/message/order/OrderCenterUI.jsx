import React from 'react'
import {
  Order,
  Header,
  Ul,
  Li,
} from './StyledOrderCenter'

export default () => {
  return(
    <Order>
        <Header>订单中心</Header>
        <Ul>
          <Li>
            <img src="" alt=""/>
            <div className= 'OrderCenter'>
              <div className = 'OrderCenterTop'>
                <div className = 'left'>

                </div>
                <div className = 'right'>

                </div>
              </div>
              <div className = 'OrderCenterBottom'>
                <h3></h3>
              </div>
            </div>
          </Li>
        </Ul>
      </Order>
  )
}
