import * as Taro from "@tarojs/taro";
import Config from '../config'

class EducationApi {
    /**
     *项目通用get请求
     */
  commonGet(params) {
    return Taro.request({
      url: Config.baseUrl + '/app.do',
      data: params,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
  }
}

export default new EducationApi()
