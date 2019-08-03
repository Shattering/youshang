import React from 'react'

import {
  Link
} from 'react-router-dom'

import {
  Mine
} from './StyledMine'


export default () => {
  return(
    <Mine>
      <Link to="/mine/set">设置</Link>
      <Link to="/mine/detail">详情</Link>
    </Mine>
  )
}