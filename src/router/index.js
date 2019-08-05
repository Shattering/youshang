import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'

import {SettingContainer} from '../pages/setting/index'
import {OrderContainer} from '../pages/order/index'
import {PersonalContainer} from '../pages/personal/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/mine/personal"  component={PersonalContainer}></Route>
        <Route path="/mine/order"  component={OrderContainer}></Route>
        <Route path="/mine/setting"  component={SettingContainer}></Route>
        <Route path="/"  component={Index}></Route>
      </Switch>
    </Router>
  );
}

export default App;
