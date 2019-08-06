import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Switch, Slider,  Row, Col } from 'antd';
import { Online } from './StyledTeacherOnline'
class TeacherOnlineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 1,
        };
    }
    onChange = value => {
        this.setState({
            inputValue: value,
        });
    };
    render() {
        return (
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
                            value={this.state.inputValue}
                            onChange={this.onChange}
                            >
                    {this.state.inputValue}
                    {
                      this.state.inputValue < 12 ? ":00 AM": ":00 PM"
                    }
                             </div>
                         </div>
                       
                        <Row> 
                            
                            <Col span={24}>
                            <img className="time-src1" src="images/times@3x.png" alt=""></img>
                                <Slider
                                    min={0}
                                    max={23}
                                    onChange={this.onChange}
                                    value={typeof this.state.inputValue === 'number' ? this.state.inputValue : 0}
                                />
                             <img className="time-src2" src="images/times@3x.png" alt=""></img>
                            </Col>
                            
                        </Row>
                    </div>
                </div>
            </Online>
        )
    }
}

export default TeacherOnlineContainer
