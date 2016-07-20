import Component from '../system/component';
import template from '../templates/components/kaomoji-item.hbs';

export default class KaomojiList extends Component {
  public static layoutSpec: any = template;
  public clipboard: any = null;

  didRender() {
    const { attrs } = this;
    if (this.clipboard === null) {
      this.clipboard = new Clipboard(this.element, {
        action() {
          return 'copy';
        },

        text() {
          return attrs.kaomoji;
        }
      });
      this.clipboard.on('success', this.actions.success.bind(this));
      this.clipboard.on('error', this.actions.error.bind(this));
    }
  }

  didUpdateAttrs({ newAttrs }: { newAttrs: any }) {
    if (this.clipboard !== null) {
      this.clipboard.text = () => newAttrs.kaomoji;
    }
  }

  destroy() {
    this.clipboard.destroy();
    this.clipboard = null;
  }

  notify(type: string, text: string) {
    alertify.delay(1000)[type].call(alertify, text);
  }

  actions = {
    success(event: any) {
      this.notify('success', `${event.text} -- copied to clipboard!`);
    },

    error() {
      this.notify('error', 'Failed to copy kaomoji to the clipboard (′︿‵｡)');
    }
  }
}

