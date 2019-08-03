import React from 'react';
import { IndexContainer as Index } from 'pages/index/'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Index></Index>
      </Router>
    </Provider>   
  )
}

export default App;