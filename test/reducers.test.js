import test from 'ava'

import { rotate } from '../src/actions/commands'
import position from '../src/reducers/position'

const emptyState = { x: 0, y: 0, degrees: 0 }

test('Rotate reducer and action works', t => {
  const newState = position(emptyState, rotate('right'))
  t.is( newState.degrees, Math.PI/2 )
})
