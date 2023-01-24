import SimpleLightbox from 'simplelightbox';

function renderMarkup(imagesData, makeMarkupString, placeForRender) {
  const markup = imagesData.hits.map(imgData => makeMarkupString(imgData));

  placeForRender.insertAdjacentHTML('beforeend', markup.join(''));
  let gallery = new SimpleLightbox('.gallery a');
}

export { renderMarkup };
