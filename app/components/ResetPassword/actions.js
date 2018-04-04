import axios from 'axios'
import {USERS_URL} from '../../config/consts'

export function resetPassword(userData, scc, err) {
  axios({
    method: 'post',
    responseType: 'json',
    url: USERS_URL + "/reset",
    data: userData
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
