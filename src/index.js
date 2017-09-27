import "babel-polyfill"
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './reducers'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ createStore(reducers) }>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
