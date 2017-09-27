import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/message.css'

const Message = ({ active, message }) => {
  return (
    <div className={ styles.message } >
      { active ? message : "Try typing in 'place' to initialise" }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    active: state.active,
    message: state.message
  }
}

export default connect(mapStateToProps)(Message)
