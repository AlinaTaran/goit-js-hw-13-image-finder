import templates from './templates/gallery-items.hbs';
import refs from './refs';

function createMarkup(images) {
  refs.imagesContainer.insertAdjacentHTML('beforeend', templates(images));
}
export default createMarkup;
