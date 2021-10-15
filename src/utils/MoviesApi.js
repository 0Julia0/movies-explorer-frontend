import { MOVIES_BASE_URL } from './constants';

const checkResponse = (res) => {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  };

export function getMovies() {
    return fetch(`${MOVIES_BASE_URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(res => checkResponse(res));
};