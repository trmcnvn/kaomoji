import Application from './system/application';
import KaomojiListComponent from './components/kaomoji-list';
import KaomojiItemComponent from './components/kaomoji-item';
import kaomoji from './data/kaomoji';

const app = new Application();
app.registerComponent('kaomoji-list', KaomojiListComponent);
app.registerComponent('kaomoji-item', KaomojiItemComponent);

const model = app.model({ kaomoji });
window.view = app.render(model, document.getElementById('content'));
// Could fork `experimental-glimmer-app` and pass reference of app to
// each component created instead of creating global.
