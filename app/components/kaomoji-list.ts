import Component from '../system/component';
import template from '../templates/components/kaomoji-list.hbs';

export default class KaomojiList extends Component {
  public static layoutSpec: any = template;
  public selectedCategory: string = '';

  get kaomoji() {
    const kaomoji: any[] = [];
    this.attrs.data.map((item) => item.kaomojis).forEach((item) => {
      const items = item.filter((item) => {
        return this.selectedCategory === '' ? true :
          this.selectedCategory === item.category;
      }).map((item) => item.kaomoji);
      if (items.length > 0) {
        kaomoji.push(items.reduce((a, b) => a.concat(b)));
      }
    });
    return kaomoji.reduce((a, b) => a.concat(b));
  }

  didInsertElement() {
    const select: HTMLSelectElement = this.element.getElementsByTagName('select')[0];
    select.addEventListener('change', this.actions.change.bind(this));
  }

  actions = {
    change(event: any) {
      const { value }: { value: string } = event.target;
      this.set('selectedCategory', value);
      window.view.rerender();
    }
  }
}

