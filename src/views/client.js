import React from 'react'
import ReactDOM from 'react-dom'

import './app.css'
import App from './app'

ReactDOM.render(
  <App 
    path={window.location.pathname} 
    state={window.initialState} 
  />, 
  document.getElementById('root')
)
