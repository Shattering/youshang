import React from 'react'
import { Input } from 'antd';
//import  axios from 'axios';
import {withRouter} from 'react-router-dom'
import Header from  'components/header/Header'
import StyledFindItem from './StyledWriteComments'
const { TextArea } = Input;
class WriteComments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ''
    }
  }
  render() {
    
    return (
        <StyledFindItem>
        <Header name='备注订单'></Header>
        <TextArea rows={8}
        placeholder="请详细说明内容~~"
        value={this.state.comments} 
        onChange={this.handleInput}
        autosize={{ minRows: 6, maxRows: 8 }}
        />
        <button onClick={this.submitComments}>提交</button>
        </StyledFindItem>
    ) 
 } 

   submitComments= ()=>{
   
    
    //  let id = this.props.match.params.subOrderId.slice(1)
    this.props.history.go(-1)

    //  this.props.history.push(`/detail/:${id}`,{
    //   remarks: this.state.comments
    //     }
    // )


        // axios({
        //   url:`api/remarks/${this.props.location.state.oid}`,
        //   method: 'PATCH',
        //   data:`remark=${this.state.comments}`,
        //   headers:{ 'content-type': 'application/x-www-form-urlencoded' },
        // })
        // .then((response)=> {
        //   this.props.history.go(-1)
        // })
        // .catch(function (error) {
        //   console.log(error);
        // });
   }
   handleInput= (e) =>{
       this.setState({
        comments: e.target.value
       })
   }
}
export default withRouter(WriteComments)