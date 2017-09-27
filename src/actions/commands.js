export const rotate = (direction) => {
  return {
    type: 'ROTATE',
    degrees: direction == 'left' ? -(Math.PI/2) : (Math.PI/2)
  }
}

export const command = (args) => {
  const argArray = args.split(' ')
  return (actions[argArray[0]])(argArray.slice(1))
}

const actions = {
  left: () => rotate('left'),
  right: () => rotate('right')
}
