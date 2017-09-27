import test from 'ava'

import position from '../src/reducers/position'

const TEST_STATE = { x: 0, y: 0, radians: Math.PI }

test('Rotate reducer  works', t => {
  const newState = position(TEST_STATE, { type: 'ROTATE', radians: Math.PI/2 })
  t.is( newState.radians, (3/2)*Math.PI )
})

test('Move reducer works', t => {
  const newState = position(TEST_STATE, { type: 'MOVE', steps: 2 })
  t.is( newState.y, 2 )
  t.is ( newState.x, 0 )
})
