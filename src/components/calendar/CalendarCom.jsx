

import React, { Component } from 'react';

import ajax from '../../utils/ajax'

// import style from './style.use.less';
import CalendarUI from './CalendarUI.js';
import left from './img/left.png';
import right from './img/right.png';
import TimetipsUI from './TimetipsUI'


let indexi = -1;
export default class WebCalendar extends Component {
    constructor(props) {
        super(props);
        this.result = '';
        this.itemList = [];
        this.tartX = '';
        this.endX = '';
        this.date = '';
        this.isopen = true;
        this.hidd = '';
        this.clickIndex = -1;
        this.clickGroupIndex = -1; // 点击的组的index
        this.changeMonthIndex = 0;
        this.state = {
            currentDay: new Date().getDate() >=10 ? new Date().getDate():'0'+new Date().getDate(),
            currentMonth: new Date().getMonth() + 1,
            currentYear: new Date().getFullYear(),
            weekList: [
                { name: '周一', className: '' },
                { name: '周二', className: '' },
                { name: '周三', className: '' },
                { name: '周四', className: '' },
                { name: '周五', className: '' },
                { name: '周六', className: '' },
                { name: '周日', className: '' }
            ],
            dayList: []
        };
        this.today = this.state.currentYear + '/' +this.state.currentMonth +'/' +this.state.currentDay
        this.initCalendar = this.initCalendar.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderBody = this.renderBody.bind(this);
        this.renderList = this.renderList.bind(this);
        this.preMonth = this.preMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.onTouchStart()
    }

     componentWillMount() {
        // style.use() // 需要配置loader 可以直接注释 忽略掉  实现每个模块卸载之后 css也会销毁 
    }

    componentWillUnmount() {
        // style.unuse() // 需要配置loader 可以直接注释 忽略掉 实现每个模块卸载之后 css也会销毁 
        this.clickIndex = -1;
    }

    async componentDidMount() {
        this.result = await ajax('http://10.9.65.236:5500/CoursePlan')
        if(localStorage.type === '2' ) {
            this.result = this.result[0].plan
        }
        if(localStorage.type === '1' ) {
            this.result = this.result[1].plan
        }
        this.initCalendar(new Date(this.today))
        this.initItemList(this.today)
    }


    // 获取当前date的当月第一天的字符串形式
    getMonthFirstDate(date) {
        const nowYear = date.getFullYear(); // 获取年份
        const nowMonth = date.getMonth() + 1; // 根据月份字符串来获取日期需要在month的基础上加1 获取当月第一天
        // console.log(`${nowYear}-${nowMonth}-01`, `${nowYear}-${nowMonth}-01`);
        return `${nowYear}/${nowMonth}/01`;
    }

    // 获取当前date的字符串形式
    getDateString(date) {
        const nowYear = date.getFullYear(); // 获取年份
        const nowMonth = date.getMonth() + 1; // 获取月份
        let day = date.getDate();
        day = day < 10 ? '0' + day : day;
        return `${nowYear}/${nowMonth}/${day}`;
    }

    // 上个月
    preMonth() {
        this.hidd = true;
        this.isopen = true;
        this.changeMonthIndex -= 1;
        const date = new Date(`${this.state.currentYear}/${this.state.currentMonth}/${this.state.currentDay}`);
        const preMonthFirstDate = new Date(this.getMonthFirstDate(new Date(date.setDate(0)))); // 日期变为上个月的最后一天了
        this.initCalendar(preMonthFirstDate);
    }

    // 下个月
    nextMonth() {
        this.hidd = true;
        this.isopen = true;
        this.changeMonthIndex += 1;
        const date = new Date(`${this.state.currentYear}/${this.state.currentMonth}/${this.state.currentDay}`);
        const nextMonthFirstDate = new Date(this.getMonthFirstDate(new Date(date.setDate(39)))); //  手动至为下一月
        this.initCalendar(nextMonthFirstDate);
    }


    // 初始化日历
    initCalendar(currentDate) {
        indexi = -1;
        // console.log(' this.changeMonthIndex', this.changeMonthIndex, 'this.clickiindex', this.clickIndex);
        const nowDate = currentDate ? currentDate : new Date();
        const nowMonthFirstDate = this.getMonthFirstDate(nowDate); // 获取当月1号日期
        const nowWeek = new Date(nowMonthFirstDate).getDay() ? new Date(nowMonthFirstDate).getDay() : 7; // 获取星期几 为0表示星期日手动至为7
        const newDateList = []; // 创建日期数组
        const lineDateList = []; // 创建当前日期所在行数组
        const startDay = 2 - nowWeek; // 开始日期的下标  因为 setDate(0)是上个月最后一天  所以是2-nowWeek  用来表示向前需要取几天的数据 setDate0 负数 都是把日期变为上个月

        const showDayLength = nowWeek < 6 ? 35 : 42; // 如果5行能显示下一个月 就只显示5行
        // 循环处理 获取日历上应该显示的日期
        for (let i = startDay; i < startDay + showDayLength; i++) {
            indexi = indexi + 1;
            const date = new Date(new Date(nowMonthFirstDate).setDate(i)); // 获取时间对象
            const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate(); // 小于9的数字前面加0
            const dayObject = {
                line: '',
                date: this.getDateString(date),
                day,
                index: indexi, // 设置角标
                className: '',
                status: indexi === this.clickIndex && this.changeMonthIndex === this.clickGroupIndex ? 1 : 0,
                isdefault: 0, // 是否是当天  1是当天
                currMonth: nowDate.getMonth() === date.getMonth() ? 1 : 0 // 是否是当月
            };
            // new Date(str).toDateString() === new Date().toDateString()
            if (date.toDateString() === new Date().toDateString()) {
                // dayObject.className = 'today';
                dayObject.isdefault = 1;
            }
            if (dayObject.currMonth === 0) {
                dayObject.day = ''
            }
            if(dayObject.isdefault === 1) {
                this.date = dayObject.date
                this.initItemList(this.date)
            }
            newDateList.push(dayObject);

        }
        // 设置当前行数组
        let line = ''
        for (let i = 0; i < newDateList.length; i++) {
            newDateList[i].line = parseInt(i / 7) + 1
            if (newDateList[i].isdefault === 1) {
                line = newDateList[i].line
            }
        }
        for (let i = 0; i < newDateList.length; i++) {
            if (newDateList[i].line === line) {
                lineDateList.push(newDateList[i])
            }
        }
        this.setState(() => ({
            dayList: this.isopen === false ? lineDateList : newDateList,
            currentDay: nowDate.getDate(),
            currentMonth: nowDate.getMonth() + 1 >= 10 ? nowDate.getMonth() + 1 : '0' + (nowDate.getMonth() + 1),
            currentYear: nowDate.getFullYear(),
        }));
    }

    sizeChange() {
        this.isopen = !this.isopen
        if (this.changeMonthIndex === 0) {
            this.initCalendar()
        }
        else {
            const date = new Date(`${this.state.currentYear}/${this.state.currentMonth}/${this.state.currentDay}`);
            this.hidd = !this.hidd
            this.initCalendar(date)
            console.log(date)
        }
    }

    onClickThings(item, index) {
        const dayList = this.state.dayList;
        if (this.clickIndex === -1) {
            // 此时没有选中的项
            dayList[index].status = 1;
            this.clickIndex = index;
            this.clickGroupIndex = this.changeMonthIndex;// 赋值点击的组index
            // console.log('item.date', item.date);
            this.setState({
                dayList: [...dayList],
            });
        } else {
            // 已经存在选中的项需要先清空在设置
            if (this.clickGroupIndex === this.changeMonthIndex) {
                // 说明上次点击和当前在一组
                const clickIndex = this.clickIndex;
                dayList[clickIndex].status = 0;
                dayList[index].status = 1;
                this.clickIndex = index;
                this.setState({
                    dayList: [...dayList]
                });
            } else {
                // 说明上次点击和当前不在一组  以为数据是新的所以直接修改本次即可
                this.clickGroupIndex = this.changeMonthIndex;// 赋值点击的组index
                this.clickIndex = index;
                dayList[index].status = 1;
                this.setState({
                    dayList: [...dayList]
                });
            }
        }
        this.initItemList(item.date)
    }

    initItemList(date){
        this.itemList = []
        for (const key in this.result) {
            if (key === date) {
                this.itemList = this.result[key]
            }
        }
    }

    touchStart(e) {
        this.startX = e.touches[0].pageX
    }
    touchEnd(e) {
        this.endX = e.changedTouches[0].pageX
        let res = this.startX - this.endX
        if( res  >0 && res >  window.innerWidth/3){
            this.nextMonth()
        }
        if( res < 0 && res <  -window.innerWidth/3){
            this.preMonth()
        }
    }

    onTouchStart() {
        let body = document.querySelector('body');
        body.addEventListener("touchstart", this.touchStart.bind(this));
        body.addEventListener("touchend", this.touchEnd.bind(this));
    }

    renderHeader() {
        return (
            <div className='calendar-header'>
                <div className='dis' onClick={this.preMonth} style={{ alignItems: 'center' }}>
                    <img src={left} style={{ paddingLeft: 10, paddingRight: 10 }} alt="left" />
                </div>
                <div className='aa'>
                    <span className={'cal_title'}>{this.state.currentYear + '年' + this.state.currentMonth + '月'}</span>

                </div>
                <div className='dis' onClick={this.nextMonth} style={{ alignItems: 'center' }}>
                    <img src={right} style={{ paddingLeft: 10, paddingRight: 10 }} alt="right" />
                </div>
            </div>
        );
    }

    renderBody() {
        //dayObject.currMonth === 1 ? 'white' : 'gray'
        return (
            <div className='calendar-body'>
                <div className='week-container'>
                    {this.state.weekList.map((week) => <div key={week.name} className={`week ${week.className}`}>
                        <span className={'span_week'}>{week.name}</span>
                    </div>)}
                </div>
                <div className='day-container' >
                    {this.state.dayList.map((dayObject, index) => <div key={index} className={`day ${dayObject.className}`} onClick={dayObject.currMonth === 1 ? this.onClickThings.bind(this, dayObject, index) : null} style={{ Visibility: dayObject.currMonth === 0 ? 'hidden' : null }}>
                        <div className={'inner_style'} style={{ backgroundColor: dayObject.status ? 'lightblue' : dayObject.isdefault === 1 ? 'yellowgreen' : null }}>
                            <span className={'span_txt'} style={{ color: dayObject.status ? '#fff' : dayObject.isdefault === 1 ? 'red' : 'black' }}> {dayObject.day}</span>
                        </div>
                    </div>)}
                </div>
                <button onClick={this.sizeChange.bind(this)}>缩放</button>
            </div>
        );
    }

    renderList() {
        return (
            <TimetipsUI>
                {
                this.itemList.map((obj, index) => 
                <div className="timeitem" key={obj.time}>
                    <div className="timetitle">
                        <span className="fang">■</span>
                        <span className="time">{obj.time}</span>
                    </div>
                    <p>{obj.content}</p>
                </div>)
                }
            </TimetipsUI>
        )
    }

    render() {
        return (
            <CalendarUI>
                <div className='calendar' >
                    {this.renderHeader()}
                    {this.renderBody()}
                    {this.renderList()}
                </div>
            </CalendarUI>
        );
    }
}