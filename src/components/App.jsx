import React from 'react'

import styles from '../css/app.css'

import Input from './Input'
import Board from './Board'

const App = () => {
  return (
    <div className={ styles.container } >
      <Input />
      <Board />
    </div>
  )
}

export default App
