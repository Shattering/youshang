import React, { Component } from 'react'
import PersonalUI from './PersonalUI'
import { Cover } from './styledPersonal'
import man from 'assets/images/man.png'
import woman from 'assets/images/woman.png'

import Header from 'components/header/Header'

  

class PersonalContainer extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: localStorage,
            recordArray: [
                {
                    label: '专科',
                    value: '专科'
                },
                {
                    label: '本科',
                    value: '本科'
                },
                {
                    label: '研究生',
                    value: '研究生'
                },
                {
                    label: '硕士',
                    value: '硕士'
                },
                {
                    label: '博士',
                    value: '博士'
                },
            ]
        });
        this.chooseImage = this.chooseImage.bind(this)
        this.changeSex = this.changeSex.bind(this)
        this.changeBirth = this.changeBirth.bind(this)
        this.changeRecord = this.changeRecord.bind(this)
        this.changeBetter = this.changeBetter.bind(this)
        this.chooseSexMan = this.chooseSexMan.bind(this)
        this.chooseSexWoman = this.chooseSexWoman.bind(this)
    }

    chooseImage() {
        let ele = document.querySelector(".chooseImg")
        let head = document.querySelector("#headImg")
        let file = ele.files[0]
        if (window.FileReader) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            //监听文件读取结束后事件
            reader.onloadend = function (e) {
                let newUrl = this.result;
                head.src = newUrl;
                localStorage.setItem('url', newUrl)
                // console.log(newUrl)
            };
        }
        ele.value = ''

    }
    changeSex() {
        let cover = document.querySelector('.cover')
        cover.style.cssText = "display: block"
    }
    chooseSexMan() {
        let cover = document.querySelector('.cover')
        localStorage.setItem('sex', '男')
        cover.style.cssText = "display: none"
        this.setState({
            data: localStorage
        })
    }
    chooseSexWoman() {
        localStorage.setItem('sex', '女')
        let cover = document.querySelector('.cover')
        cover.style.cssText = "display: none"
        this.setState({
            data: localStorage
        })
    }
    changeBirth(date) {
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        let d = date.getDate();
        let birth = `${y}-${m}-${d}`
        localStorage.setItem('birth', birth)
        this.setState({
            data: localStorage
        })
    }
    changeRecord(date) {
        let res = date[0]
        localStorage.setItem('record', res)
        this.setState({
            data: localStorage
        })
    }
    changeBetter() {

    }
    render() {
        return (
            <>
                <Header name='个人中心' ></Header>
                <PersonalUI
                    data={this.state.data}
                    recordArray={this.state.recordArray}
                    chooseImage={this.chooseImage}
                    changeSex={this.changeSex}
                    changeBirth={this.changeBirth}
                    changeRecord={this.changeRecord}
                    changeBetter={this.changeBetter}
                >
                </PersonalUI>
                <Cover className="cover">
                    <div className="chooseBox">
                        <p>选择性别</p>
                        <div className="sexBox">
                            <div onClick={this.chooseSexMan}>
                                <img src={man} alt="" />
                                <p>男</p>
                            </div>
                            <div onClick={this.chooseSexWoman}>
                                <img src={woman} alt="" />
                                <p>女</p>
                            </div>
                        </div>
                    </div>
                </Cover>
            </>
        )
    }
}

export default PersonalContainer