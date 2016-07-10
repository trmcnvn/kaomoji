import Ember from 'ember';

const {
  Route,
  get,
  inject: { service }
} = Ember;

export default Route.extend({
  ajax: service(),

  model() {
    return get(this, 'ajax').request('/data.json');
  }
});
