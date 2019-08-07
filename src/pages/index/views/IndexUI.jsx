import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { StudentHomeContainer as StudentHome } from 'pages/home/'
import { TeacherHomeContainer as TeacherHome } from 'pages/home/'
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

  return (
    <Index>
      <Main>
        

          { props.type=== 0? 

              ( <Switch>
                <Route exact path="/home" component={StudentHome} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/message" component={Message} />
                <Route path="/mine" component={Mine} />
                </Switch>
              )
              :
              (<Switch> 
                <Route exact path="/home" component={TeacherHome} />
                <Route path="/timetable" component={Timetable} />
                <Route path="/message" component={Message} />
                <Route path="/mine" component={Mine} />
              </Switch>)
          }  
      </Main>
      <Nav>
        {
          props.routes.map((item, index) => {
            return (
              <NavItem
                key={item.name}
                onClick={props.changeRoute.bind(this, index, item.path)}
              >
                <i
                  className={props.currentIndex === index ? 'iconfont active' : 'iconfont'}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <span className={props.currentIndex === index ? 'active' : ''}>
                  {item.name}
                </span>
              </NavItem>
            )
          })
        }
      </Nav>
    </Index>
  )
}