import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onOpenHandler(event) {
  if (event.target.nodeName === 'IMG') {
    const instance = basicLightbox.create(
      `<img src=${event.target.dataset.source}>`,
    );

    instance.show();
  }
}

export default onOpenHandler;
