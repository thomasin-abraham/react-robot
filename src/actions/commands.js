export const rotate = (direction) => {
  return {
    type: 'ROTATE',
    radians: direction == 'left' ? -(Math.PI/2) : (Math.PI/2)
  }
}

export const move = (steps) => {
  return ( !isNaN(steps) )
  ? {
    type: 'MOVE',
    steps
  }
  : invalid()
}

export const invalid = () => {
  return {
    type: 'INVALID'
  }
}

export const command = (args) => {
  const argArray = args.split(' ')
  return (actions[argArray[0]] || actions['invalid'])(argArray.slice(1))
}

const actions = {
  left: () => rotate('left'),
  right: () => rotate('right'),
  move: (steps) => move(parseInt(steps)),
  invalid: () => invalid()
}
