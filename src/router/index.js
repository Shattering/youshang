import React from 'react';
import { BrowserRouter as Router , Switch, Route , Redirect } from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'
import { GuidepageContainer as Guidepage } from 'pages/guidepage/'
import { SettingContainer as Setting } from '../pages/setting/index'
import { PayContainer as Pay } from '../pages/paycenter/index'
import { PersonalContainer as Personal } from '../pages/personal/index'
import { ChatContainer as Chat } from '../pages/chat/index'
import { OrderCenterContainer as OrderCenter } from '../pages/ordercenter/index'
import { ErrorContainer as Error } from '../pages/error/index'

import { SettingContainer } from '../pages/setting/index'
import { VerificationCodeLogin as vcl } from '../pages/login/VerificationCodeLogin';
import { PasswordLogin } from '../pages/login/PasswordLogin'
import { ForgetCode } from '../pages/forgetCode/index'
import { SignIn } from '../pages/signin/index'
import { ResetCode } from '../pages/resetCode/index';

import{OrderDetailContainer as FindTeacherDetail} from 'components/Subscribe/'
import WriteComments from 'components/Comments/view/WriteComments'
import Name from '../pages/personal/personalList/Name'
import Phone from '../pages/personal/personalList/Phone'
import Education from '../pages/personal/personalList/Education'
import Self from '../pages/personal/personalList/Self'
import Teach from '../pages/personal/personalList/Teach'
import Address from '../pages/personal/personalList/Address'

import{AppointmentContainer as AppointmentDetail} from 'components/Appointment'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Guidepage} exact></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/paycenter"  component={ Pay }></Route>
        <Route path="/ordercenter"  component={ OrderCenter }></Route>
        <Route path="/mine/personal"  component={Personal} exact></Route>
        <Route path="/mine/personal/name"  component={Name}></Route>
        <Route path="/mine/personal/add"  component={Address}></Route>
        <Route path="/mine/personal/teach"  component={Teach}></Route>
        <Route path="/mine/personal/edu"  component={Education}></Route>
        <Route path="/mine/personal/phone"  component={Phone}></Route>
        <Route path="/mine/personal/self"  component={Self}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/message/chat"  component={Chat}></Route>
        <Route path="/mine/setting"  component={ SettingContainer }></Route>
        <Route path="/verificationcodelogin"  component={ vcl }></Route>
        <Route path="/passwordlogin" component={ PasswordLogin }></Route>
        <Route path="/forgetcode" component={ ForgetCode }></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/detail/:subOrderId" component={FindTeacherDetail}></Route>
        <Route path="/writeComments/:subOrderId" component={WriteComments}></Route>
        <Route path="/appointmentdetail/:subOrderId" component={AppointmentDetail}></Route>
        <Route path="/resetcode" component={ResetCode}></Route>
        <Route path="/error"  component={Error}></Route>
        <Redirect to="/error" />
       

        <Route path="/"  component={ Index }></Route>
      </Switch>
    </Router>
  );
}

export default App;
