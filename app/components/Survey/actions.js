import axios from 'axios';
import { SURVEY_URL } from '../../config/consts';

function getToken() {
  return localStorage.token;
}

export function createSurvey(userData, scc, err) {
  axios({
    method: 'POST',
    headers: { Authorization: 'Bearer ' + getToken() },
    responseType: 'json',
    url: SURVEY_URL,
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
