import React from 'react';
import { IndexContainer as Index } from 'pages/index/'

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'

import {SettingContainer} from './pages/setting/index'
import {OrderContainer} from './pages/order/index'
import {PersonalContainer} from './pages/personal/index'

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
