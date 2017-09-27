import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/message.css'

const Message = ({ message }) => {
  return (
    <div className={ styles.message } >
      { message }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps)(Message)
