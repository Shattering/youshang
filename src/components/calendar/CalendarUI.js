import styled from 'styled-components'

const CalendarUI = styled.div`
background:#dbeeff!important;
  .calendar-header{
    background:#5598F7;
    display: flex;
    justify-content: space-between;
    padding: 10px 80px;
    .aa{
      font-size: 16px;
      color:#fff;
    }
    img{
      width: .4rem;
    }
  }
  .calendar-body{
    /* background: #fff; */
    padding-top: .3rem;
    padding-left: 14px;
    padding-bottom: 20px;
    padding-right: 14px;
    .week-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .week {
        //&:nth-child(6), &:nth-child(7){
        //
        //}
        width: 14.2%;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
    .day-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .day {
        width: 14.2%;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  }
  .transBtn{
    margin: 0 auto;
    width: .1rem;
    height: .1rem;
    img{
      width:100%;
      height: 100%;
    }
  }
  .inner_style{
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

`

export default CalendarUI