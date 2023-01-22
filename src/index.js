import axios from 'axios';
import { Notify } from 'notiflix';
// Notify.success('Sol lucet omnibus');
// Notify.failure('Qui timide rogat docet negare');
// Notify.warning('Memento te hominem esse');
// Notify.info('Cogito ergo sum');

const KEY = '22542197-803b3827949c8e03dddadbe4d';
const IMAGES_URL = 'https://pixabay.com/api/';

// request:
// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.
// page и per_page - 40

// response:
// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.
// totalHits - общее количество изображений которые подошли под критерий поиска
