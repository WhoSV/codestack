import axios from 'axios';
import { USERS_URL } from '../../config/consts';

export function createUser(userData, scc, err) {
  axios({
    method: 'POST',
    responseType: 'json',
    url: USERS_URL,
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
