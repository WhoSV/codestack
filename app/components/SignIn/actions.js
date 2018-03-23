import axios from 'axios'
import { AUTH_URL } from '../../config/consts'

export function authUser(email, password, scc, err) {
  axios({
    method: 'post',
    headers: {},
    responseType: 'json',
    url: AUTH_URL,
    data: {
      email: email,
      password: password
    }
  })
  .then(function (res){
    localStorage.token = res.data.token;
    scc();
  })
  .catch(function (err) {
    err(err);
  });
}

export function getToken() {
    return localStorage.token
}
