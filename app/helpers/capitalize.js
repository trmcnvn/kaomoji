import Ember from 'ember';

const {
  Helper,
  String: { capitalize: emberCapitalize }
} = Ember;

export function capitalize([text]) {
  return emberCapitalize(text);
}

export default Helper.helper(capitalize);
