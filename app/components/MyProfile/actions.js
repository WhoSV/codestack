import axios from 'axios';
import {
  USERS_URL,
  COURSES_URL,
  SURVEY_URL,
  FAVORITE_URL
} from '../../config/consts';

function getToken() {
  return localStorage.token;
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

export function deleteCourse(uuid, scc, err) {
  axios({
    method: 'delete',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: COURSES_URL + '/' + uuid
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

export function getSurveys(scc, err) {
  axios({
    method: 'get',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: SURVEY_URL
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
