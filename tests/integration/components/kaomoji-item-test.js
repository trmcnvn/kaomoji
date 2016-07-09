import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kaomoji-item', 'Integration | Component | kaomoji item', {
  integration: true
});

test('it renders', function(assert) {
  this.set('kaomoji', ':D');
  this.render(hbs`{{kaomoji-item kaomoji=kaomoji}}`);

  const $button = this.$('button');
  assert.equal($button.length, 1);
  assert.equal($button.text().trim(), ':D');
});
