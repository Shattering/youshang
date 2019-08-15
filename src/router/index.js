import React from 'react';
import { BrowserRouter as Router , Switch, Route , Redirect } from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'
import { GuidepageContainer as Guidepage } from 'pages/guidepage/'
import { SettingContainer as Setting } from '../pages/setting/index'
import { OrderContainer as Order } from '../pages/order/index'
import { PersonalContainer as Personal } from '../pages/personal/index'
import { ChatContainer as Chat } from '../pages/chat/index'
import { OrderCenterContainer as OrderCenter } from '../pages/ordercenter/index'
import { ErrorContainer as Error } from '../pages/error/index'

import { SettingContainer } from '../pages/setting/index'
import { OrderContainer } from '../pages/order/index'
import { VerificationCodeLogin as vcl } from '../pages/login/VerificationCodeLogin';
import { PasswordLogin } from '../pages/login/PasswordLogin'
import { ForgetCode } from '../pages/forgetCode/index'
import { SignIn } from '../pages/signin/index'

import Name from '../pages/personal/personalList/Name'
import Phone from '../pages/personal/personalList/Phone'
import Education from '../pages/personal/personalList/Education'
import Self from '../pages/personal/personalList/Self'
import Teach from '../pages/personal/personalList/Teach'
import Address from '../pages/personal/personalList/Address'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Guidepage} exact></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/order"  component={Order}></Route>
        <Route path="/ordercenter"  component={OrderCenter}></Route>
        <Route path="/mine/personal"  component={Personal} exact></Route>
        <Route path="/mine/personal/name"  component={Name}></Route>
        <Route path="/mine/personal/add"  component={Address}></Route>
        <Route path="/mine/personal/teach"  component={Teach}></Route>
        <Route path="/mine/personal/edu"  component={Education}></Route>
        <Route path="/mine/personal/phone"  component={Phone}></Route>
        <Route path="/mine/personal/self"  component={Self}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/message/chat"  component={Chat}></Route>
        <Route path="/mine/order"  component={ OrderContainer }></Route>
        <Route path="/mine/setting"  component={ SettingContainer }></Route>
        <Route path="/verificationcodelogin"  component={ vcl }></Route>
        <Route path="/passwordlogin" component={ PasswordLogin }></Route>
        <Route path="/forgetcode" component={ ForgetCode }></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/error"  component={Error}></Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
