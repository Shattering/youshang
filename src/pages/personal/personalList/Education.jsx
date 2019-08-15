import React, { Component } from 'react';
import Header from 'components/header/Header'
import EducationUI from './EducationSty';
import {BorderedLI} from '../views/styledPersonal';
import PhoneUI from './PhoneSty'





class Education extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      data: localStorage,
      edu : localStorage.edu,
    })
    this.chooseImage = this.chooseImage.bind(this)
    this.clearImg = this.clearImg.bind(this)
    this.changeEdu = this.changeEdu.bind(this)
    this.saveChangeEdu = this.saveChangeEdu.bind(this)
  }
  chooseImage() {
    let eduIpt = document.querySelector(".eduIpt")
    let eduImg = document.querySelector(".eduImg")
    let file = eduIpt.files[0]
    if (window.FileReader) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            let newUrl = this.result;
            eduImg.src = newUrl;
            localStorage.setItem('eduUrl', newUrl)
            // console.log(newUrl)
        };
    }
    eduIpt.value = ''
  }
  clearImg(){
    let eduImg = document.querySelector(".eduImg")
    eduImg.src = '';
    localStorage.removeItem('eduUrl')
  }
  changeEdu(e){
    this.setState({edu: e.target.value});
  }
  saveChangeEdu(){
    localStorage.setItem("edu",this.state.edu)
  }


  render (){
    return (
      <>
        <Header name="教学资格证信息"></Header>
        <PhoneUI>

          <BorderedLI className="item-box" hasBorder={true}>
            <span>教师职称</span>
            <input type="text" value={this.state.edu} onChange={this.changeEdu} onBlur={this.saveChangeEdu} placeholder="请输入职称"/>
          </BorderedLI>
        </PhoneUI>
        <EducationUI>
          <p>上传证书<span onClick={this.clearImg}>清除图片</span></p>
          <div className="edubox">
            <div className="img">
              <img src={this.state.data.eduUrl} alt="" className="eduImg"/>
            </div>
            <input className="eduIpt" type="file" accept="image/*" onChange={this.chooseImage} />
          </div>
        </EducationUI>
      </>
    )
  }
}

export default Education