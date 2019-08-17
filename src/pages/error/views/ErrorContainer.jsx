import React,{Component} from 'react'
import ErrorUI from './ErrorUI'


class ErrorContainer extends Component {
  constructor(){
    super()
    this.handlegohome = this.handlegohome.bind(this)
  }
  render() {
    return (
      <ErrorUI gohome={this.handlegohome}></ErrorUI>
    )
  }
  handlegohome(){
    this.props.history.push('/index/home')
  }
}

export default ErrorContainer