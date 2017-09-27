import { initialState, setMessage } from './utils'
import { placeRobot, moveRobot, rotateRobot } from './positions'

export default function settings (state = initialState, action = {}) {
  switch (action.type) {
    case 'PLACE' : return placeRobot(state, action)
    case 'ROTATE' : return rotateRobot(state, action)
    case 'MOVE' : return moveRobot(state, action)
    case 'REPORT' : return setMessage(state, ` ${state.x}, ${state.y}, ${radiansToDirection(state.radians).toUpperCase()} `)
    case 'SHUTDOWN' : return initialState
    case 'INVALID' : return setMessage(state, "Couldn't understand command")
    default : return initialState
  }
}
