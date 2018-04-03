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
    localStorage.id = res.data.id;
    // localStorage.activeUser = JSON.stringify(res.data.active_user);
    scc();
  })
  .catch(function (err) {
    err(err);
  });
}

export function getToken() {
    return localStorage.token
}
