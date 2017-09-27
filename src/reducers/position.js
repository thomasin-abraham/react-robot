const initialState = {
  active: false,
  x: 0,
  y: 0,
  radians: 0,
  message: 'Try typing in left to rotate'
}

export function position (state = initialState, action = {}) {
  switch (action.type) {

    case 'PLACE':
      return {
        active: true,
        x: keepOnBoard ( 4, 0, action.x )[0] || 0,
        y: keepOnBoard ( 4, 0, action.y )[0] || 0,
        radians: action.radians,
        message: 'Robot placed on board!'
      }

    case 'ROTATE':
      return {
        ...state,
        radians: state.radians + action.radians,
        message: 'Robot rotated'
      }

    case 'MOVE':
      const x = keepOnBoard ( 4, state.x, action.steps * Math.sin(state.radians) )
      const y = keepOnBoard ( 4, state.y, action.steps * -Math.cos(state.radians) )
      return {
        ...state,
        x: x[0],
        y: y[0],
        message: x[1] && y[1] ? 'Vroom vrrom' : 'Stopped myself from falling off, be more careful next time'
      }

    case 'INVALID':
      return {
          ...state,
          message: "Couldn't understand command"
      }

    default:
      return initialState
  }
}

export function keepOnBoard (boardSize, currentSteps, newSteps) {
  const total = Math.round( currentSteps + newSteps )
  return total > boardSize ? [ boardSize, false ] : total < 0 ? [ 0, false ] : [ total, true ]
}

export default position
