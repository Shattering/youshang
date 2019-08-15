import { Checkbox } from 'antd-mobile';
import React, { Component } from 'react';


const CheckboxItem = Checkbox.CheckboxItem;

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      data: localStorage
    })
  }
  arrayRemoveItem(arr, delVal) {
    if (arr instanceof Array) {
        var index = arr.indexOf(delVal);
        if (index > -1) {
            arr.splice(index, 1);
         }
     }
}
  onChange = (val) => {
    const better =  this.state.data.better.split('/')
    better.includes(val) ? this.arrayRemoveItem(better,val) : better.push(val)
    let res = better.join('/')
    if(res[0]==='/'){
      res = res.substr(1)
    }
    localStorage.setItem('better',res)
    this.setState({
      data: localStorage
    })
  }
  render() {
    const data = [
      { value: '数学', label: '数学' },
      { value: '语文', label: '语文' },
      { value: '英语', label: '英语' },
      { value: '化学', label: '化学' },
      { value: '物理', label: '物理' },
      { value: '生物', label: '生物' },
      { value: '作文', label: '作文' },
      { value: '历史', label: '历史' },
      { value: '德语', label: '德语' },
      { value: '俄语', label: '俄语' },
    ];
    return (<div>
      {data.map((i) => {
        if (this.state.data.better&&this.state.data.better.includes(i.value)) {
          return (
            <CheckboxItem key={i.value} defaultChecked={true} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          )
        } else {
          return (
            <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
              {i.label}
            </CheckboxItem>
          )
        }
      }
      )}
    </div>);
  }
}

export default Test