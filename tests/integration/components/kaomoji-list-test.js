import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('kaomoji-list', 'Integration | Component | kaomoji list', {
  integration: true
});

test('it renders', function(assert) {
  this.set('kaomoji', {
    emotions: {
      happy: [':)', ':D']
    }
  });
  this.render(hbs`{{kaomoji-list data=kaomoji}}`);

  const $title = this.$('.panel-title');
  assert.equal($title.eq(0).text().trim(), 'Emotions');
  assert.equal($title.eq(1).text().trim(), 'Happy');

  const $buttons = this.$('.btn-kaomoji');
  assert.equal($buttons.length, 2);
  assert.equal($buttons.eq(0).text().trim(), ':)');
  assert.equal($buttons.eq(1).text().trim(), ':D');
});
