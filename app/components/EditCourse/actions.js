import axios from 'axios'
import {COURSES_URL} from '../../config/consts'

function getToken() {
  return localStorage.token
}

export function updateCourse(courseData, scc, err) {
  axios({
    method: 'PATCH',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: COURSES_URL + "/" + courseData.id,
    data: courseData
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

export function getCourse(id, scc, err) {
  axios({
    method: 'get',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: COURSES_URL + "/" + id
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
