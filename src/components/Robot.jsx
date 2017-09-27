import React from 'react'
import { connect } from 'react-redux'

import styles from '../css/robot.css'

const Robot = ({ active, x, y, radians }) => {
  const style = {
    transform: `translate(${ x * 50 }px, ${ ( 4 - y ) * 50 }px) rotate(${ radians }rad)`,
    display: active ? 'flex' : 'none'
  }
  return (
    <div className={`jam jam-rocket ${ styles.friend }`}
      style={ style }>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    active: state.active,
    x: state.x,
    y: state.y,
    radians: state.radians
  }
}

export default connect(mapStateToProps)(Robot)
