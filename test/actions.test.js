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

test('Move action returns invalid if steps not number', t => {
  const actual = command('move weee').type
  t.is(actual, 'INVALID')
})

test('Place action returns default if radians command not direction', t => {
  const actual = command('place 3, 2, weee').radians
  t.is(actual, 0)
})

test('Place action returns default if numbers not there', t => {
  const actual = command('place 3')
  t.is(actual.x, 3)
  t.is(actual.y, 0)
  t.is(actual.radians, 0)
})

test('Command function returns invalid if command not understood', t => {
  const actual = command('weeeee').type
  t.is(actual, 'INVALID')
})
