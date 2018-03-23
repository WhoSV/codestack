import axios from 'axios'
import {USERS_URL} from '../../../../config/consts'

function getToken() {
  return localStorage.token
}

export function createUser(userData, scc, err) {
  axios({
    method: 'POST',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USERS_URL,
    data: userData
  })
  .then(function (res) {
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (error) {
    err(error)
  })
}
