import React from 'react'
import {
  Home
} from './StyledHome'

export default (props) => {
  return(
    <Home>
      <button onClick={props.scanQRCode}>扫一扫</button>
      <p id="text"></p>
    </Home>
  )
}