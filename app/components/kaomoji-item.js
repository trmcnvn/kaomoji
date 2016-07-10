import Ember from 'ember';
/* global noty */

const {
  Component
} = Ember;

export default Component.extend({
  classNames: ['kaomoji-item'],

  _createNoty(text) {
    noty({
      layout: 'bottom',
      theme: 'relax',
      type: 'success',
      timeout: 1000,
      text
    });
  },

  actions: {
    success(event) {
      this._createNoty(`${event.text} -- copied to clipboard!`);
    },

    error() {
      this._createNoty('Failed to copy kaomoji to the clipboard (′︿‵｡)');
    }
  }
});
