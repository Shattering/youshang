import React from 'react';
import { IndexContainer as Index } from 'pages/index/'

import { BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Detail from './pages/mine/detail/Detail'
import Set from './pages/mine/set/Set'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/mine/detail' component={Detail}/>
        <Route path='/mine/set' component={Set}/>
        <Route path='/' component={Index}/>
      </Switch>
    </Router>
  );
}

export default App;

