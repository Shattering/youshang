import React from 'react'
import 'antd/dist/antd.css';
import { Switch, Slider,  Row, Col } from 'antd';
import { Online } from './StyledTeacherOnline'
export default (props) => {
    return(
        < Online>
                <div className="online"><span>是否开启老师上线功能</span> <Switch size="small" defaultChecked className="switch-button" /></div>
                <div className="sliders">
                    <div className="time-sliders">
                        <div className="time-sliders-tip">
                            <span>时间</span>
                            <div
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={props.timeValue}
                            onChange={props.onChangetime.bind(this)}
                            >
                    {props.timeValue}
                    {
                      props.timeValue < 12 ? ":00 AM": ":00 PM"
                    }
                             </div>
                         </div>
                       
                        <Row> 
                            
                            <Col span={24}>
                            <img  src="images/times@3x.png" alt=""></img>
                                <Slider
                                    min={0}
                                    max={23}
                                    onChange={props.onChangetime.bind(this)}
                                    value={typeof props.timeValue === 'number' ? props.timeValue : 0}
                                />
                             <img  src="images/times@3x.png" alt=""></img>
                            </Col>
                            
                        </Row>
                    </div>
                   
                    <div className="range-sliders">
                        <div className="time-sliders-tip">
                            <span>范围</span>
                            <div
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={props.rangeValue}
                            onChange={props.onChangerange.bind(this)}
                            >
                    {props.rangeValue}KM
                 
                             </div>
                         </div>
                       
                        <Row> 
                            <Col span={24}>
                            <img  src="images/range@3x.png" alt=""></img>
                                <Slider
                                    min={0}
                                    max={100}
                                    onChange={props.onChangerange.bind(this)}
                                    value={typeof props.rangeValue === 'number' ? props.rangeValue : 0}
                                />
                             <img  src="images/range@3x.png" alt=""></img>
                            </Col>
                            
                        </Row>
                    </div>
                   
                    <div className="price-sliders">
                        <div className="time-sliders-tip">
                            <span>时薪</span> 
                            <div
                            min={1}
                            max={20}
                            style={{ marginLeft: 16 }}
                            value={props.priceValue}
                            onChange={props.onChangeprice.bind(this)}
                            >
                    {props.priceValue}元
                 
                             </div>
                         </div>
                       
                        <Row> 
                            <Col span={24}>
                            <img  src="images/price@3x.png" alt=""></img>
                                <Slider
                                    min={0}
                                    max={2000}
                                    onChange={props.onChangeprice.bind(this)}
                                    value={typeof props.priceValue === 'number' ? props.priceValue : 0}
                                />
                             <img  src="images/price@3x.png" alt=""></img>
                            </Col>
                            
                        </Row>
                    </div>
                
                </div>
          </Online>
    )
 }
