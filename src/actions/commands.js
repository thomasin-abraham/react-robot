export const place = (values) => {
  const seperate = values.split(',')
  return {
    type: 'PLACE',
    x: parseInt(seperate[0]) || 0,
    y: parseInt(seperate[1]) || 0,
    radians: radianLookup[seperate[2]] || 0
  }
}

const radianLookup = {
  north: 0,
  east: Math.PI/2,
  south: Math.PI,
  west: (3/2)*Math.PI
}

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
  place: (places) => place(places.join('')),
  left: () => rotate('left'),
  right: () => rotate('right'),
  move: (steps) => move(parseInt(steps)),
  invalid: () => invalid()
}
