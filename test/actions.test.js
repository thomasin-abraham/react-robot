import test from 'ava'

import { command } from '../src/actions/commands'

test('Command function assigns left and right to correct function', t => {
  const actual = command('left').radians
  t.is(actual, -(Math.PI/2))
})

test('Command function assigns move to correct function', t => {
  const actual = command('move 3').steps
  t.is(actual, 3)
})

test('Move reducer returns invalid if steps not number', t => {
  const actual = command('move weee').type
  t.is(actual, 'INVALID')
})

test('Command function returns invalid if command not understood', t => {
  const actual = command('weeeee').type
  t.is(actual, 'INVALID')
})
