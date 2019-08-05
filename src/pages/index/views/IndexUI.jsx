import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer as Home } from 'pages/home/'
import { TimetableContainer as Timetable } from 'pages/timetable/'
import { MessageContainer as Message } from 'pages/message/'
import { MineContainer as Mine } from 'pages/mine/'
import {
  Index,
  Main,
  Nav,
  NavItem
} from './StyledIndex'

export default (props) => {
  return(
    <Index>
      <Main>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route path="/timetable" component={Timetable}/>
          <Route path="/message" component={Message}/>
          <Route path="/mine" component={Mine}/>
        </Switch>
      </Main>
      <Nav>
        {
          props.routes.map((item,index)=>(
            <NavItem 
              onClick={ props.changeRoute.bind(this,index,item.path)} 
              key={item.name}
            >
              <img src={props.currentIndex === index?item.imgActive:item.img} alt="" />
              <span style={props.currentIndex === index?{color:"#2492EB"}:{color:"#353535"}}>
                {item.name}
              </span>
            </NavItem>
          ))
        }
      </Nav>
    </Index>
  )
}