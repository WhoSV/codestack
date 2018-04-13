import axios from 'axios';
import { USERS_URL } from '../../config/consts';

function getToken() {
  return localStorage.token;
}

export function deleteUser(id, scc, err) {
  axios({
    method: 'delete',
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

export function updateUser(userData, scc, err) {
  axios({
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: USERS_URL + '/' + userData.id,
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

export function updateUserPassword(userData, scc, err) {
  axios({
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: USERS_URL + '/' + userData.id + '/update',
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
