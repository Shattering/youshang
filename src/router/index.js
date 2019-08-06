import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'
import { GuidepageContainer as Guidepage } from 'pages/guidepage/'
import { SettingContainer as Setting } from '../pages/setting/index'
import { OrderContainer as Order } from '../pages/order/index'
import { PersonalContainer as Personal } from '../pages/personal/index'


import { SettingContainer } from '../pages/setting/index'
import { OrderContainer } from '../pages/order/index'
import { PersonalContainer } from '../pages/personal/index'
import { VerificationCodeLogin } from '../pages/login/VerificationCodeLogin';
import { PasswordLogin } from '../pages/login/PasswordLogin'
import { ForgetCode } from '../pages/forgetCode/index'
import { SignIn } from '../pages/signin/index'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Guidepage}/>
        <Route path="/mine/personal"  component={Personal}></Route>
        <Route path="/mine/order"  component={Order}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/"  component={Index}></Route>
        <Route path="/mine/personal"  component={ PersonalContainer }></Route>
        <Route path="/mine/order"  component={ OrderContainer }></Route>
        <Route path="/mine/setting"  component={ SettingContainer }></Route>
        <Route path="/verificationcodelogin"  component={ VerificationCodeLogin }></Route>
        <Route path="/passwordlogin" component={ PasswordLogin }></Route>
        <Route path="/forgetcode" component={ ForgetCode }></Route>
        <Route path="/signin" component={SignIn}></Route>

        <Route path="/"  component={ Index }></Route>
      </Switch>
    </Router>
  );
}

export default App;
