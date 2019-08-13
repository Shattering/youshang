import React from 'react'
import { Input } from 'antd';
import {http} from 'utils/axios.js'
import {withRouter} from 'react-router-dom'
import Header from  'components/header/Header'
import StyledFindItem from './StyledWriteComments'
const { TextArea } = Input;
class WriteComments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: props.location.state.remarks? props.location.state.remarks: ' '
     // remcomments: ''
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.location.state.detail.remark!== nextState.comments
  // }

  render() {
  
    return (
        <StyledFindItem>
        <Header name='备注订单'></Header>
        <TextArea rows={8}
        placeholder="请详细说明内容~~"
        value={this.state.comments} 
        onChange={this.handleInput}
        autosize={{ minRows: 6, maxRows: 8 }}
        >
        </TextArea>
       <button onClick={this.submitComments}>提交</button>
        </StyledFindItem>
    ) 
 } 

   submitComments= ()=>{
   
      let id = this.props.match.params.subOrderId.slice(1)
     
      let detailitem = this.props.location.state.detail 
      let orderstatic= this.props.location.state.orderstatic
         console.log(`/detail/:${id}`)
            if(orderstatic==='2') {
              http(
                `../api/remarks/${id}`,
                'PATCH',
                `remark=${this.state.comments}`
                ).then((response)=> {
                      console.log(response);
                    })
            } 
  
          this.props.history.push(`/detail/:${id}`,{
          detailitem: detailitem,
          remarks: this.state.comments,
          orderstatic,
          
             })
     
   }


   handleInput= (e) =>{
       this.setState({
        comments: e.target.value
       })
   }

}
export default withRouter(WriteComments)