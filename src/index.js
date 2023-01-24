import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { axiosDefault } from './js/axiosDefault';
import { Notify } from 'notiflix';
import { makeMarkup } from './js/makeMarkup';

const refs = {
  input: document.querySelector('.form-input'),
  form: document.querySelector('.search-form'),
  galleryWrapper: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.js-load-more'),
};

let page = 1;
let searchValue = '';
let totalHitsCounter = 0;

async function fetchImages(searchName, page) {
  try {
    const response = await axiosDefault.get('', {
      params: {
        q: searchName,
        page,
      },
    });

    return response.data;
  } catch (error) {
    Notify.failure(error);
  }
}

function renderMarkup(imagesData) {
  const markup = imagesData.hits.map(imgData => makeMarkup(imgData));

  refs.galleryWrapper.insertAdjacentHTML('beforeend', markup.join(''));
  let gallery = new SimpleLightbox('.gallery a');
  console.log(gallery);
}

async function onFormSubmit(e) {
  e.preventDefault();

  if (refs.input.value.trim() === '') {
    return Notify.warning('Enter request name please');
  }

  page = 1;
  totalHitsCounter = 40;

  const imagesData = await fetchImages(refs.input.value.trim(), page);

  if (imagesData.total === 0) {
    return Notify.info(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }

  refs.galleryWrapper.innerHTML = '';
  Notify.success(`Hooray! We found ${imagesData.totalHits} images.`);
  renderMarkup(imagesData);

  page += 1;
  searchValue = refs.input.value.trim();
  refs.loadMoreBtn.classList.remove('is-hidden');
}

async function onLoadMoreBtnClick(e) {
  const imagesData = await fetchImages(searchValue, page);
  if (totalHitsCounter > imagesData.totalHits) {
    refs.loadMoreBtn.classList.add('is-hidden');

    return Notify.warning(
      "We're sorry, but you've reached the end of search results."
    );
  }

  renderMarkup(imagesData);

  page += 1;
  totalHitsCounter += 40;
}

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
