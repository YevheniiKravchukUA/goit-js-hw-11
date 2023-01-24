import axios from 'axios';

const KEY = '22542197-803b3827949c8e03dddadbe4d';

const axiosDefault = axios.create({
  baseURL: `https://pixabay.com/api/?key=${KEY}`,

  params: {
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  },
});

export { axiosDefault };
