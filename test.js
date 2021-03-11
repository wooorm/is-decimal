import test from 'tape'
import {isDecimal} from './index.js'

test('isDecimal(character)', function (t) {
  t.ok(isDecimal('0'))
  t.ok(isDecimal('9'))
  t.ok(isDecimal('1'.charCodeAt(0)))
  t.notOk(isDecimal('a'))
  t.notOk(isDecimal('0'.charCodeAt(0) - 1))
  t.notOk(isDecimal('9'.charCodeAt(0) + 1))
  t.notOk(isDecimal('F'.charCodeAt(0)))
  t.notOk(isDecimal('💩'))

  t.end()
})
