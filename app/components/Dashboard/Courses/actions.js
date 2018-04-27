import axios from 'axios';
import { FAVORITE_URL, COURSES_URL } from '../../../config/consts';

function getToken() {
  return localStorage.token;
}

export function addToFavorite(userData, scc, err) {
  axios({
    method: 'POST',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: FAVORITE_URL,
    data: userData
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

export function getOpenCourse(id, scc, err) {
  axios({
    method: 'get',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: COURSES_URL + '/' + id + '/open'
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
