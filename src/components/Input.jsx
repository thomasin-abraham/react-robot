import React from 'react'

import styles from '../css/input.css'

const Input = () => {
  return (
    <div className={ styles.wrapper }>
      <input className={ styles.input } type="text" />
      <button className={ `jam jam-magic ${ styles.button } ` }></button>
    </div>
  )
}

export default Input
