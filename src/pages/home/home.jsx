import Taro, {Component} from "@tarojs/taro";
import {View} from "@tarojs/components";
import Api from '../../api/educations'

class HomePage extends Component {

  componentDidMount() {
    let token = Taro.getStorageSync('token')
    if (token) {
      console.log(token);
    }

    console.log(token);
    let data = {
      'method': 'getCjcx',
      'xh': '2017411881',
    }
    let result = Api.commonGet(data)
    console.log(result);

  }

  render() {
    return (
      <View>
        dfsadfasdfs
      </View>
    )
  }
}

export default HomePage
