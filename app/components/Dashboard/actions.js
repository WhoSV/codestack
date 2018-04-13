import axios from 'axios';
import { COURSES_URL, USERS_URL, FAVORITE_URL } from '../../config/consts';

function getToken() {
  return localStorage.token;
}

export function getCourses(scc, err) {
  axios({
    method: 'get',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: COURSES_URL
  })
    .then(function(res) {
      if (res.status < 400) {
        scc(res.data);
      }
    })
    .catch(function(error) {
      err(error);
    });
}

export function getUser(id, scc, err) {
  axios({
    method: 'get',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: USERS_URL + '/' + id
  })
    .then(function(res) {
      if (res.status < 400) {
        scc(res.data);
      }
    })
    .catch(function(error) {
      err(error);
    });
}

export function getFavorites(scc, err) {
  axios({
    method: 'get',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: FAVORITE_URL
  })
    .then(function(res) {
      if (res.status < 400) {
        scc(res.data);
      }
    })
    .catch(function(error) {
      err(error);
    });
}
