import './styles.css';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import apiService from './js/apiService';
import markup from './js/templating';
import refs from './js/refs';
import loadMoreBtn from './js/components/button';
import onOpenHandler from './js/modal';
const loadMoreButton = new loadMoreBtn({
  selector: 'button[data-action="load-more"]',
  hidden: true,
});
refs.searchInput.addEventListener('submit', searchFormSubmitHandler);
loadMoreButton.refs.button.addEventListener('click', fetchImages);
refs.imagesContainer.addEventListener('click', onOpenHandler);
function searchFormSubmitHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  if (!apiService.query || !apiService.query.trim()) {
    error({
      text: 'No input!',
    });
    return;
  }
  clearContainer();
  apiService.resetPage();
  fetchImages();
  form.reset();
}

function fetchImages() {
  loadMoreButton.disable();

  apiService
    .searchImages()
    .then(images => {
      if (images.length === 0) {
        error({ text: 'Not found!' });
        loadMoreBtn.hide();
      }
      markup(images);

      loadMoreButton.show();
      loadMoreButton.enable();
    })
    .catch(error => console.log(error));
}

function clearContainer() {
  refs.imagesContainer.innerHTML = '';
}
