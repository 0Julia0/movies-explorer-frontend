import { BASE_URL } from './constants';

const checkResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        "name": name,
        "email": email,
        "password": password,
      }),
    })
    .then(res => checkResponse(res));
  };

  export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        "email": email,
        "password": password,
      }),
    })
    .then(res => checkResponse(res));
  };

  export const logout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        credentials: "include"
    })
    .then(res => checkResponse(res));
  };

  export const getUserInfo = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(res => checkResponse(res));
  };

  export const updateProfile = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
    })
    })
    .then(res => checkResponse(res));
  };

  export const getUserMovies = () => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(res => checkResponse(res));
  };

  export const saveMovie = (data) => {
    return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.movieId
      })
    })
    .then(res => checkResponse(res));
  };

  export const deleteMovie = (data) => {
    return fetch(`${BASE_URL}/movies/${data}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then(res => checkResponse(res));
  };