import axios from 'axios'
import {COURSES_URL} from '../../../config/consts'

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

export function deleteCourse(id, scc, err) {
  axios({
    method: 'delete',
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

export function updateCourseStatus(courseData, scc, err) {
  axios({
    method: 'PATCH',
    headers: {Authorization: "Bearer " + getToken()},
    responseType: 'json',
    url: COURSES_URL + "/" + courseData.id + "/status",
    data:  courseData
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
