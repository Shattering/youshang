import React from 'react'
import { Guidepage } from './StyledGuidepage'
import { Carousel } from 'antd-mobile';

export default (props) => {
  return(
    <Guidepage>
      <Carousel
        >
          {props.swiperImgs.map(val => (
            <i
              key={val.id}
              style={{ display: 'inline-block', width: '100%', height: '100%' }}
            >
              <p>
                <span>{val.desc}</span>
                <span>{val.desc2}</span>
              </p>
              <img
                src={val.src}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
              {
                val.id === 3
                ? (
                  <div className="choose">
                    <p>
                      <button onClick={()=>{
                        props.history.push('/home',{
                          type:0
                        })
                      }}>学生</button>
                      <button onClick={()=>{
                        props.history.push('/home',{
                          type:1
                        })
                      }}>老师</button>
                    </p>
                  </div>
                )
                : (
                  <div className="choose"></div>
                )
              }
            </i>
          ))}
        </Carousel>
    </Guidepage>
  )
}