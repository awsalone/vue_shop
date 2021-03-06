/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'

export default function ajax (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
    if (type === 'GET') {
      let datastr = ''
      Object.keys(data).forEach(key => {
        datastr += key + data[key] + '&'
      })
      if (datastr !== '') {
        datastr = datastr.substring(0, datastr.lastIndexOf('&'))
        url = url + '?' + datastr
      }
      promise = axios.get(url)
    } else {
      promise = axios.post(url, data)
    }
    promise.then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      reject(error)
    })
  })
}
