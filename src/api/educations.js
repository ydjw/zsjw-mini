import * as Taro from "@tarojs/taro";
import Config from '../config'

class EducationApi {
    /**
     *项目通用get请求
     */
  commonGet(params) {

      let token = Taro.getStorageSync('token')
      return Taro.request({
      url: Config.baseUrl + '/app.do',
      data: params,
      header: {
        'Content-Type': 'application/json',
        'token':token
      },
      method: 'GET',
    });
  }
}

export default new EducationApi()
