import { toLower } from 'kaomoji/helpers/to-lower';
import { module, test } from 'qunit';

module('Unit | Helper | to lower');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = toLower(['hElLo WorLd']);
  assert.equal(result, 'hello world');
});
