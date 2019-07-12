import Taro from '@tarojs/taro'
import Config from '../config'


const interceptor = function (chain) {
  const requestParams = chain.requestParams
  // console.log(`http ${method || 'GET'} --> ${url} data: `, data)
  // Taro.showLoading({
  //   title: '加载中',
  //   icon: 'none',
  // })
  return chain.proceed(requestParams)
    .then(res => {
      // setTimeout(()=>{
      //   Taro.hideLoading()
      // }, 1000)
      if (res.code == '200' || res.code == "OK") {
        return res.data
      } else if (res.code == 301) {
        Taro.clearStorageSync()
        Taro.reLaunch({
          url: '/pages/login/login'
        })
      } else {
        Taro.showToast({title: res.message, icon: 'none'})
        return false
      }
    })
}

Taro.addInterceptor(interceptor)

const request = {}

request.get = function (url, data) {
  return Taro.request({
    url: Config.baseUrl + url,
    data: data,
    method: 'GET'
  })
}

request.post = function (url, params) {
  return Taro.request({
    url: Config.baseUrl + url,
    method: 'post',
    dataType: 'text',
    data: JSON.stringify(params),
    header: {
      'content-type': 'application/json'
    }
  })
}

export default request
