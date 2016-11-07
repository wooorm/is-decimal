'use strict';

var test = require('tape');
var decimal = require('./');

test('decimal(character)', function (t) {
  t.ok(decimal('0'));
  t.ok(decimal('9'));
  t.ok(decimal('1'.charCodeAt(0)));
  t.notOk(decimal('a'));
  t.notOk(decimal('0'.charCodeAt(0) - 1));
  t.notOk(decimal('9'.charCodeAt(0) + 1));
  t.notOk(decimal('F'.charCodeAt(0)));
  t.notOk(decimal('💩'));

  t.end();
});
