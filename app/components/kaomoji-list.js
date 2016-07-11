import Ember from 'ember';

const {
  Component,
  computed,
  get
} = Ember;

export default Component.extend({
  selectedTag: undefined,

  /**
   * Converts the data format from
   *    tags: ['a', 'b', 'c']
   * to
   *    { groupName: 'a', options: ['b', 'c'] }
   * and merges options on duplicate groupName.
   */
  tags: computed('data', {
    get() {
      const data = get(this, 'data');
      const mappings = data.map((obj) => {
        const [group] = obj.tags;
        return { groupName: group, options: obj.tags.slice(1) };
      });
      const tags = [];
      mappings.forEach((mapping) => {
        const match = tags.find((x) => x.groupName === mapping.groupName);
        if (match !== undefined) {
          match.options = match.options.concat(mapping.options);
        } else {
          tags.push(mapping);
        }
      });
      return tags;
    }
  }).readOnly()
});
