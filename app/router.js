import Ember from 'ember';
import config from './config/environment';

const {
  Router,
  inject: { service },
  run: { scheduleOnce },
  get
} = Ember;

const RouterInstance = Router.extend({
  location: config.locationType,
  metrics: service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  _trackPage() {
    scheduleOnce('afterRender', this, () => {
      const page = document.location.pathname;
      const title = get(this, 'currentRouteName') || 'unknown';
      get(this, 'metrics').trackPage({ page, title });
    });
  }
});

RouterInstance.map(function() {});

export default RouterInstance;
