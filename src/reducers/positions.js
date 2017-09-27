import { keepOnBoard, radiansToDirection, setMessage } from './utils'

export function placeRobot (state, action) {
  const xP = keepOnBoard ( 4, 0, action.x )
  const yP = keepOnBoard ( 4, 0, action.y )
  return xP[1] && yP[1]
    ? {
        active: true,
        x: xP[0] || 0,
        y: yP[0] || 0,
        radians: action.radians,
        message: 'Placed on board!'
      }
    : setMessage(state, "That's not on the board! Try different co ordinates")
}

export function rotateRobot (state, action) {
  return {
    ...state,
    radians: state.radians + action.radians,
    message: `Rotated to face ${radiansToDirection(state.radians + action.radians)}`
  }
}

export function moveRobot (state, action) {
  const x = keepOnBoard ( 4, state.x, action.steps * Math.sin(state.radians) )
  const y = keepOnBoard ( 4, state.y, action.steps * Math.cos(state.radians) )
  return {
    ...state,
    x: x[0],
    y: y[0],
    message: x[1] && y[1] ? 'Vroom vrrom' : "That's too far, I'll fall off"
  }
}
