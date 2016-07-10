import Ember from 'ember';

const {
  Helper,
  isEmpty: emberEmpty
} = Ember;

export function isEmpty([text]) {
  return emberEmpty(text);
}

export default Helper.helper(isEmpty);
