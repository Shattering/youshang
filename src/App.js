import React from 'react';
import {Provider} from 'react-redux'
import { IndexContainer as Index } from 'pages/index/'
import store from './store'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Index></Index>
    </Router>
    </Provider>
  );
}

export default App;
