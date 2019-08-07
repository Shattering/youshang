import React, { Component } from 'react'
import TeacherOnlineUI from './TeacherOnlineUI'
class TeacherOnlineContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeValue: 1,
            rangeValue: 1,
            priceValue: 1,
        };
        this.onChangetime = this.onChangetime.bind(this);
        this.onChangerange = this.onChangerange.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
    }
    onChangetime = value => {
        this.setState({
            timeValue: value,
        });
    };
    onChangerange = value => {
        this.setState({
            rangeValue: value,
        });
    };
    onChangeprice = value => {
        this.setState({
            priceValue: value,
        });
    };
    render() {
        return (
            <TeacherOnlineUI 
            {...this.state}
            onChangetime = { this.onChangetime}
            onChangerange= {this.onChangerange}
            onChangeprice= {this.onChangeprice}
            >
            </TeacherOnlineUI>
        )
    }
}

export default TeacherOnlineContainer
