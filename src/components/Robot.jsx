import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/robot.css'

const Robot = ({ degrees }) => {
  const position = {
    transform: `rotate(${ degrees }rad)`
  }
  return (
    <div className={`jam jam-rocket ${ styles.friend }`}
      style={ position }>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    degrees: state.position.degrees
  }
}

export default connect(mapStateToProps)(Robot)
