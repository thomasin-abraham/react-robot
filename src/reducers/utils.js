export function radiansToDirection (rads) {
  const x = Math.round(Math.cos(rads))
  const y = Math.round(Math.sin(rads))
  return (
    x == '0'
    ? y == '-1'
      ? 'west'
      : 'east'
    : x == '-1'
      ? 'south'
      : 'north'
  )
}

export function keepOnBoard (boardSize, currentSteps, newSteps) {
  const total = Math.round( currentSteps + newSteps )
  return total > boardSize ? [ currentSteps, false ] : total < 0 ? [ currentSteps, false ] : [ total, true ]
}

export function setMessage (message) {
  return {
    ...state,
    message
  }
}

export const initialState = {
  active: false,
  x: 0,
  y: 0,
  radians: 0,
  message: 'Hello!'
}
