import { isEmpty } from 'kaomoji/helpers/is-empty';
import { module, test } from 'qunit';

module('Unit | Helper | is-empty');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.notOk(isEmpty(['hello']));
  assert.ok(isEmpty([undefined]));
  assert.ok(isEmpty(['']));
});
