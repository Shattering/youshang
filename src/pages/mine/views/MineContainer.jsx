import React,{Component} from 'react'
import MineUI from './MineUI'

class MineContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <MineUI></MineUI>
    )
  }
}

export default MineContainer