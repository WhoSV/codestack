import axios from 'axios'
import {COURSES_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getCourses(scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: COURSES_URL
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
