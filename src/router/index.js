import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'
import { GuidepageContainer as Guidepage } from 'pages/guidepage/'
import { SettingContainer as Setting } from '../pages/setting/index'
import { OrderContainer as Order } from '../pages/order/index'
import { PersonalContainer as Personal } from '../pages/personal/index'
import { ChatContainer as Chat } from '../pages/chat/index'
import { OrderCenterContainer as OrderCenter } from '../pages/ordercenter/index'



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Guidepage}/>
        <Route path="/mine/personal"  component={Personal}></Route>
        <Route path="/order"  component={Order}></Route>
        <Route path="/ordercenter"  component={OrderCenter}></Route>
        <Route path="/mine/setting"  component={Setting}></Route>
        <Route path="/message/chat"  component={Chat}></Route>
        <Route path="/"  component={Index}></Route>
      </Switch>
    </Router>
  );
}

export default App;
