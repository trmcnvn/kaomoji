import Ember from 'ember';
/* global noty */

const {
  Component,
  inject: { service },
  get
} = Ember;

export default Component.extend({
  classNames: ['kaomoji-item'],
  metrics: service(),

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
      get(this, 'metrics').trackEvent({
        category: 'Button',
        action: 'click',
        label: event.text
      });
    },

    error() {
      this._createNoty('Failed to copy kaomoji to the clipboard (′︿‵｡)');
    }
  }
});
