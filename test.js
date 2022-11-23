import test from 'tape'
import {isDecimal} from './index.js'

test('isDecimal(character)', function (t) {
  const _0 = 0x30
  const _9 = 0x39
  const F = 0x46

  t.ok(isDecimal('0'))
  t.ok(isDecimal('9'))
  t.ok(isDecimal(_0))
  t.notOk(isDecimal('a'))
  t.notOk(isDecimal(_0 - 1))
  t.notOk(isDecimal(_9 + 1))
  t.notOk(isDecimal(F))
  t.notOk(isDecimal('💩'))

  t.end()
})
