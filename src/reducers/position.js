const initialState = {
  x: 0,
  y: 0,
  radians: 0,
  message: 'Try typing in left to rotate'
}

export function position (state = initialState, action = {}) {
  switch (action.type) {

    case 'ROTATE':
      return {
        ...state,
        radians: state.radians + action.radians,
        message: 'Robot rotated'
      }

    case 'MOVE':
      const x = keepOnBoard ( 5, state.x, action.steps * Math.sin(state.radians) )
      const y = keepOnBoard ( 5, state.y, action.steps * -Math.cos(state.radians) )
      return {
        ...state,
        x: x[0],
        y: y[0],
        message: x[1] && y[1] ? 'Vroom vrrom' : 'Stopped myself from falling off, be more careful next time'
      }

    default:
      return initialState
  }
}

export function keepOnBoard (boardSize, currentSteps, newSteps) {
  const total = Math.round( currentSteps + newSteps )
  return total > (boardSize - 1) ? [ (boardSize - 1), false ] : total < 0 ? [ 0, false ] : [ total, true ]
}

export default position
