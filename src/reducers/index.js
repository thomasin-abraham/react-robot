import { keepOnBoard, radiansToDirection, initialState } from './utils'

export default function settings (state = initialState, action = {}) {
  switch (action.type) {

    case 'PLACE':
      const xP = keepOnBoard ( 4, 0, action.x )
      const yP = keepOnBoard ( 4, 0, action.y )
      return {
        active: true,
        x: xP[0] || 0,
        y: yP[0] || 0,
        radians: action.radians,
        message: xP[1] && yP[1] ? 'Placed on board!' : "That would put me off the table, got as close as I could"
      }

    case 'ROTATE':
      return {
        ...state,
        radians: state.radians + action.radians,
        message: `Rotated to face ${radiansToDirection(state.radians + action.radians)}`
      }

    case 'MOVE':
      const x = keepOnBoard ( 4, state.x, action.steps * Math.sin(state.radians) )
      const y = keepOnBoard ( 4, state.y, action.steps * Math.cos(state.radians) )
      return {
        ...state,
        x: x[0],
        y: y[0],
        message: x[1] && y[1] ? 'Vroom vrrom' : "That's too far, I'll fall off"
      }

    case 'REPORT':
      return {
        ...state,
        message: ` ${state.x}, ${state.y}, ${radiansToDirection(state.radians).toUpperCase()} `
      }

    case 'SHUTDOWN':
      return initialState

    case 'INVALID':
      return {
          ...state,
          message: "Couldn't understand command"
      }

    default:
      return initialState
  }
}
