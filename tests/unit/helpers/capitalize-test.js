import { capitalize } from 'kaomoji/helpers/capitalize';
import { module, test } from 'qunit';

module('Unit | Helper | capitalize');

// Replace this with your real tests.
test('it works', function(assert) {
  const result = capitalize(['hello, world!']);
  assert.equal(result, 'Hello, world!');
});
