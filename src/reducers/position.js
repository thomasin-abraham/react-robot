const initialState = {
  x: 0,
  y: 0,
  radians: 0,
}

function position (state = initialState, action = {}) {
  switch (action.type) {

    case 'ROTATE':
      return {
        ...state,
        radians: state.radians + action.radians
      }

    case 'MOVE':
      return {
        ...state,
        x: Math.round( state.x + ( action.steps * Math.sin(state.radians) ) ),
        y: Math.round( state.y + ( action.steps * -Math.cos(state.radians) ) )
      }

    default:
      return initialState
  }
}

export default position
