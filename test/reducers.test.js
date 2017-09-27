import test from 'ava'

import { position, keepOnBoard } from '../src/reducers/position'

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

test('keepOnBoard returns correct values if robot over steps', t => {
  const actual = keepOnBoard(5, 3, 4)
  t.is(actual[0], 5)
  t.is(actual[1], false)
})

test('keepOnBoard returns correct values if robot stays on table', t => {
  const actual = keepOnBoard(5, 3, 1)
  t.is(actual[0], 4)
  t.is(actual[1], true)
})
