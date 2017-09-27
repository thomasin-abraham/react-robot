import test from 'ava'

import position from '../src/reducers'
import { keepOnBoard, radiansToDirection } from '../src/reducers/utils'

const TEST_STATE = { x: 0, y: 0, radians: Math.PI }

test('Rotate reducer  works', t => {
  const newState = position(TEST_STATE, { type: 'ROTATE', radians: Math.PI/2 })
  t.is( newState.radians, (3/2)*Math.PI )
})

test('Move reducer works', t => {
  const newState = position(TEST_STATE, { type: 'MOVE', steps: -2 })
  t.is( newState.y, 2 )
  t.is ( newState.x, -0 )
})

test('Place reducer works', t => {
  const newState = position(TEST_STATE, { type: 'PLACE', x: 1, y: 1, radians: Math.PI })
  t.is( newState.active, true )
  t.is( newState.x, 1 )
  t.is ( newState.y, 1 )
  t.is ( newState.radians, Math.PI )
})

test('Place reducer works when x or y is illegible', t => {
  const newState = position(TEST_STATE, { type: 'PLACE', x: 'weeeee', y: 1, radians: Math.PI })
  t.is( newState.x, 0 )
  t.is ( newState.y, 1 )
  t.is ( newState.radians, Math.PI )
})

test('Radians to direction returns correct direction', t => {
  const actual = radiansToDirection(Math.PI)
  t.is(actual, 'south')
})

test('keepOnBoard returns correct values if robot over steps', t => {
  const actual = keepOnBoard(5, 3, 4)
  t.is(actual[0], 3)
  t.is(actual[1], false)
})

test('keepOnBoard returns correct values if robot stays on table', t => {
  const actual = keepOnBoard(5, 2, 1)
  t.is(actual[0], 3)
  t.is(actual[1], true)
})
