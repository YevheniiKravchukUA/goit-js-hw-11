import { axiosDefault } from './axiosDefault';
import { Notify } from 'notiflix';

async function fetchImages(searchName, page) {
  const getParams = {
    params: {
      q: searchName,
      page,
    },
  };

  try {
    const response = await axiosDefault.get('', getParams);

    return response.data;
  } catch (error) {
    Notify.failure(error);
  }
}

export { fetchImages };
