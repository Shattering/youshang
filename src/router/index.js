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

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Guidepage} exact></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/order"  component={Order}></Route>
        <Route path="/ordercenter"  component={OrderCenter}></Route>
        <Route path="/mine/personal"  component={Personal}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/message/chat"  component={Chat}></Route>
        <Route path="/error"  component={Error}></Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
