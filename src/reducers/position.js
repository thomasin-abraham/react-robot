const initialState = {
  x: 0,
  y: 0,
  degrees: 0,
}

function position (state = initialState, action = {}) {
  switch (action.type) {

    case 'ROTATE':
      return {
        ...state,
        degrees: state.degrees + action.degrees
      }

    default:
      return initialState
  }
}

export default position
