import { endPoints, BASE_URL } from './helpers/config'
import { axiosInstance, logout } from './utilities'

//api
export const api = async function ({
  method = 'get',
  api,
  body,
  status = false,
  baseURL = 'normal'
}) {
  return await new Promise((resolve, reject) => {
    if (sessionStorage.getItem(endPoints.auth.TOKEN)) {
      axiosInstance.defaults.headers[endPoints.auth.TOKEN] = ''
    }
    axiosInstance[method](`${getServiceUrl(baseURL)}${api}`, body ? body : {})
      .then((data) => {
        resolve(statusHelper(status, data))
      })
      .catch((error) => {
        try {
          if (error.response) {
            reject(statusHelper(status, error.response))
          } else {
            reject(error)
          }
        } catch (err) {
          reject(err)
        }
      })
  })
}

var statusHelper = (status, data) => {
  if (data.status === 401 || data.status === 403) {
    logout()
  }
  if (status) {
    return {
      status: data.status,
      ...data.data
    }
  } else {
    return data.data
  }
}

let getServiceUrl = (baseURL) => {
  let finalURL = ''
  if (baseURL === 'auth') {
    finalURL = BASE_URL
  } else {
    finalURL = BASE_URL
  }
  return finalURL
}
