import axios from 'axios'
import {USERS_URL, COURSES_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function getUser(id, scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: USERS_URL + "/" + id
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

export function createCourse(courseData, scc, err) {
  axios({
    method: 'post',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: COURSES_URL,
    data: courseData
  })
  .then(function (res){
    if (res.status < 400) {
      scc(res.data)
    }
  })
  .catch(function (error){
    err(error)
  })
}
