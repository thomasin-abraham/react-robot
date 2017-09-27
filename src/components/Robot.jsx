import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/robot.css'

const Robot = ({ x, y, radians }) => {
  const position = {
    transform: `translate(${ x * 50 }px, ${ y * 50 }px) rotate(${ radians }rad)`
  }
  return (
    <div className={`jam jam-rocket ${ styles.friend }`}
      style={ position }>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    x: state.position.x,
    y: state.position.y,
    radians: state.position.radians
  }
}

export default connect(mapStateToProps)(Robot)
