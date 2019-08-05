import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'

import { IndexContainer as Index } from 'pages/index/'
import { GuidepageContainer as Guidepage } from 'pages/guidepage/'
import Detail from 'pages/mine/detail/Detail'
import Set from 'pages/mine/set/Set'

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Guidepage}/>
        <Route path='/mine/detail' component={Detail}/>
        <Route path='/mine/set' component={Set}/>
        <Route path='/' component={Index}/>
      </Switch>
    </Router>
  );
}

export default AppRouter;