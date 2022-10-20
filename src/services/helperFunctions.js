//SET DATA FROM SESSION STORAGE
export const setDataFromStorage = (storageName, storageData) => {
  sessionStorage.setItem(storageName, storageData)
}

//GET DATA FROM SESSION STORAGE
export const getDataFromStorage = (storageName) => {
  let data = sessionStorage?.getItem(storageName)
  return data
}

// ADD QUERY FROM API
export const addQuery = (dataObject, apiObject) => {
  const keys = []
  if (!dataObject) {
    return ''
  }

  keys.forEach((key) => {
    let dataObjectValue = dataObject
    let apiObjectValue = apiObject.query
    let keyValue = key
    if (
      Object.prototype.hasOwnProperty.call(dataObjectValue, keyValue) &&
      typeof dataObject[key] != 'object'
    ) {
      if (Object.prototype.hasOwnProperty.call(apiObjectValue, keyValue)) {
        apiObject.addQuery = { key, payload: dataObject[key] }
      }
    } else {
      dataObject[key] &&
        Object.keys(dataObject[key]).forEach((keyName) => {
          if (Object.prototype.hasOwnProperty.call(apiObjectValue, keyName)) {
            apiObject.addQuery = {
              key: keyName,
              payload: dataObject[key][keyName]
            }
          }
        })
    }
  })
}

// GENERATE QUERY FROM API
export const generateQuery = (query) => {
  let url = ''
  if (Object.prototype.hasOwnProperty.call(query, 'url_id')) {
    url = `/${query.url_id}`
  }

  return (
    url +
    Object.keys(query).reduce((accumulator, key, index) => {
      if (
        query[key] === '' ||
        query[key] === null ||
        key === 'url_id' ||
        (query[key] !== null && query[key].toString().trim() === '')
      ) {
        return accumulator
      } else {
        return accumulator + `${index !== 0 ? '&' : '?'}${key}=${query[key]}`
      }
    }, '')
  )
}
