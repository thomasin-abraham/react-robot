const initialState = {
  x: 0,
  y: 0,
  radians: 0,
}

export function position (state = initialState, action = {}) {
  switch (action.type) {

    case 'ROTATE':
      return {
        ...state,
        radians: state.radians + action.radians
      }

    case 'MOVE':
      const x = keepOnBoard ( 5, state.x, action.steps * Math.sin(state.radians) )[0]
      const y = keepOnBoard ( 5, state.y, action.steps * -Math.cos(state.radians) )[0]
      return {
        ...state,
        x,
        y
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
