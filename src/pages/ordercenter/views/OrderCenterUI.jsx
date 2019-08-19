import React from 'react'
import {
  OrderCenter
} from './StyledOrderCenter'


export default (props) => {
  return(
    <OrderCenter>
      <ul>
        {
          props.list.map((item) =>(
            // 
            <li key={item.oid} onClick={props.goto.bind(this,item)}>
              <img src="images/dingdan.png" alt=""/>
              <div className = 'orderbody'>
                <div className = 'bodytop'>
                  <div>
                    <span className = 'spantop'>
                      徐小明 小学
                    </span>
                    <span className = 'spanbottom'>
                      {item.orderstatic == 3 ? "已完成" : item.orderstatic == 2 ? "待完成" : "评价"}
                    </span>
                  </div>
                  <span>科目：{item.content}</span>
                  <p>时间：
                    {item.starttime.replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日").slice(5,17)+"-"+item.endtime.replace(/(\d{4})\-(\d{2})\-(\d{2})/,"$1年$2月$3日").slice(12,17)}  {parseFloat((new Date(item.endtime).getTime()-new Date(item.starttime).getTime())/1000/3600).toFixed(1)}小时</p>
                </div>
                <div className = 'bodybottom'>
                价格：<span> ￥{item.price}</span>
                </div>
              </div>
            </li>
          ))
        }
        
      </ul>
    </OrderCenter>
  )
}
//   