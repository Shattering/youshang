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
import { VerificationCodeLogin as vcl } from '../pages/login/VerificationCodeLogin';
import { PasswordLogin } from '../pages/login/PasswordLogin'
import { ForgetCode } from '../pages/forgetCode/index'
import { SignIn } from '../pages/signin/index'

import{OrderDetailContainer as FindTeacherDetail} from 'components/Subscribe/'
import WriteComments from 'components/Comments/view/WriteComments'
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Guidepage} exact></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/order"  component={ Order }></Route>
        <Route path="/ordercenter"  component={ OrderCenter }></Route>
        <Route path="/mine/personal"  component={Personal}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/message/chat"  component={Chat}></Route>
        <Route path="/mine/setting"  component={ SettingContainer }></Route>
        <Route path="/verificationcodelogin"  component={ vcl }></Route>
        <Route path="/passwordlogin" component={ PasswordLogin }></Route>
        <Route path="/forgetcode" component={ ForgetCode }></Route>
        <Route path="/signin" component={SignIn}></Route>
        <Route path="/detail/:subOrderId" component={FindTeacherDetail}></Route>
        <Route path="/writeComments" component={WriteComments}></Route>
        <Route path="/error"  component={Error}></Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
