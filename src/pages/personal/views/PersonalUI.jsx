import React from 'react';
import { Personal, BorderedLI } from './styledPersonal'
import { Link } from 'react-router-dom'
import { DatePicker, List, Picker } from 'antd-mobile';
import ChooseBetter from './ChooseBetter'


export default (props) => {
  return (
    <Personal>
      <ul>
        <BorderedLI hasBorder={true}>
          <div>
            <input className="chooseImg" type="file" accept="image/*" onChange={props.chooseImage} />
            <p>头像上传<img src={props.data.url} alt="" id="headImg" />
            </p>
          </div>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/name">
            <p>
              姓名<span>{props.data.name}</span>
            </p>
          </Link>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <div onClick={props.changeSex}>
            <p>
              性别<span>{props.data.sex}</span>
            </p>
          </div>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <DatePicker
            mode="date"
            title="设置日期"
            minDate={new Date(1930, 1, 1)}
            value={new Date(props.data.birth?props.data.birth:'1990-01-01')}
            extra={props.data.birth?props.data.birth:'1990-01-01'}
            onOk={props.changeBirth}
          >
            <List.Item arrow="horizontal">生日</List.Item>
          </DatePicker>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Picker
            data={props.recordArray}
            extra={props.data.record}
            // value={props.data.record.split()}
            cols={1}
            onOk={props.changeRecord}
          >
            <List.Item arrow="horizontal">学历</List.Item>
          </Picker>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/self">
            <p>
              身份证信息<span>{props.data.self}</span>
            </p>
          </Link>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/phone">
            <p>
              联系电话<span>{props.data.phone}</span>
            </p>
          </Link>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/edu">
            <p>
              教师资格证信息<span>{props.data.edu}{props.data.eduUrl? '(已认证)':'(未认证)'}</span>
            </p>
          </Link>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/teach">
            <p>
              教学经历<span>{props.data.teach}</span>
            </p>
          </Link>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <ChooseBetter></ChooseBetter>
        </BorderedLI>
        <BorderedLI hasBorder={true}>
          <Link to="/mine/personal/add">
            <p>
              所在地<span>{props.data.address}</span>
            </p>
          </Link>
        </BorderedLI>
      </ul>
    </Personal>
  )
}


