import React from 'react'

import styles from '../css/app.css'

import Input from './Input'
import Board from './Board'
import Robot from './Robot'
import Message from './Message'
import Links from './Links'

const App = () => {
  return (
    <div className={ styles.container } >
      <Input />
      <Message />
      <div className={ styles.boardContainer }>
        <Board />
        <Robot />
      </div>
      <Links />
    </div>
  )
}

export default App
