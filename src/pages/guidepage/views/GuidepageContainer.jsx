import React,{Component} from 'react'
import GuidepageUI from './GuidepageUI'

class GuidepageContainer extends Component {

  static defaultProps = {
    swiperImgs: [
      {
        id:1,
        src:"images/yindao1.png",
        desc:"面对面教学",
        desc2:"直面问题难点"
      },
      {
        id:2,
        src:"images/yindao2.png",
        desc:"一对一辅导",
        desc2:"用心指教领跑"
      },
      {
        id:3,
        src:"images/yindao3.png",
        desc:"请选择您的职业"
      }
    ]
  }
  
  render() {
    return (
      <GuidepageUI {...this.props}></GuidepageUI>
    )
  }
}

export default GuidepageContainer

