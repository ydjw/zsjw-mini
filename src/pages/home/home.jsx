import Taro, {Component} from "@tarojs/taro";
import {Text, View, Image} from "@tarojs/components";
import './style.less';
import icKb from './img/ic_kc.png'
import icScore from './img/ic_score_list.png'

class HomePage extends Component {

  state = {
    result: {},
  }

  componentDidMount() {
    let user = Taro.getStorageSync("user")

    Taro.showToast({
      icon: 'none',
      title: '欢迎你 ' + user.username
    })
  }

  goToNextPage(path){
    Taro.navigateTo({
      url: path
    })
  }

  render() {
    return (
      <View id='root-view'>

        <View id='top-view'>
          <Text>曲园掌上教务</Text>
        </View>

        <View id='bottom-view'>

          <View onClick={()=>this.goToNextPage('/pages/business/scorelist/index')}>
            <Image src={icScore}></Image>

            <Text>
              查成绩
            </Text>
          </View>

          <View>
            <Image src={icKb}></Image>

            <Text>
              查课表
            </Text>
          </View>
        </View>

      </View>
    )
  }
}

export default HomePage
