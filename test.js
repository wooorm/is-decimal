import assert from 'node:assert/strict'
import test from 'node:test'
import {isDecimal} from './index.js'

test('isDecimal(character)', function () {
  const _0 = 0x30
  const _9 = 0x39
  const F = 0x46

  assert.ok(isDecimal('0'))
  assert.ok(isDecimal('9'))
  assert.ok(isDecimal(_0))
  assert.ok(!isDecimal('a'))
  assert.ok(!isDecimal(_0 - 1))
  assert.ok(!isDecimal(_9 + 1))
  assert.ok(!isDecimal(F))
  assert.ok(!isDecimal('💩'))
})
