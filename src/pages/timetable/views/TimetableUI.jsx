import React from 'react'
import {
  Timetable
} from './StyledTimetable'
import CalendarCom from 'components/calendar/CalendarCom'

export default () => {
  return(
    <Timetable>
      <CalendarCom></CalendarCom>
    </Timetable>
  )
}