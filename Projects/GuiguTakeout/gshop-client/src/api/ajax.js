import axios from "axios";
/* ajax 请求函数模块
* 返回值：promise 对象（异步返回的数据是：response.data）
* axios
* async
* await
*  */
export default function (url, data = {}, type = 'GET') {
  return new Promise(function (resolve, reject) {
    let promise
// 发送 get 请求
    if (type === 'GET') {
// 准备 url query 参数数据
      let dataStr = '' //数据拼接字符串（拼接参数）
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      promise = axios.get(url)
    } else {
// 发送 post 请求
      promise = axios.post(url, data)
    }
    // 调用回调函数
    promise.then(response => {
      //成功调用 resolve 函数
      resolve(response.data)
    }).catch(error => {
        //失败调用 reject 函数
        reject(error)
      })
  })
};
