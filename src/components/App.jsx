import React from 'react'

import styles from '../css/app.css'

import Input from './Input'
import Board from './Board'
import Robot from './Robot'
import Message from './Message'

const App = () => {
  return (
    <div className={ styles.container } >
      <Input />
      <Message />
      <div className={ styles.boardContainer }>
        <Board />
        <Robot />
      </div>
    </div>
  )
}

export default App
