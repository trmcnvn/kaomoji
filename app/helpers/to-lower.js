import Ember from 'ember';

const {
  Helper
} = Ember;

export function toLower([text]) {
  text = text || '';
  return text.toLowerCase();
}

export default Helper.helper(toLower);
