import React from 'react'
import { Result, Button } from 'antd';
export default (props) => {
  return(
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
    <Button 
    type="primary" 
    onClick={props.gohome.bind(this)}
    > Back Home </Button>
  }
  />
  )
}
