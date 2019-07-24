import Taro, {Component} from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import Api from '../../api/educations'
import './style.less'

class HomePage extends Component {

  state = {
    result: {}
  }

  componentDidMount() {

    let data = {
      'method': 'getCjcx',
      'xh': '2017411881',
    }
    let result = Api.commonGet(data)
    result.then(res => {
      this.setState({
        result: res.data.result
      })
    })


  }

  render() {

    let {result} = this.state
    return (
      <View id='root-view'>
        {
          console.log(result)
        }
        {
          result.map((item, index) => {
            return <View id='item-root' key={index}>
              <View id='kc-type'>
                {item.kclbmc}
              </View>
              <View id='kc-info'>
                <Text id='kc-name'>
                  {item.kcmc}
                </Text>
                <Text id='kc-name-type'>
                  {item.kcxzmc}
                </Text>
                <Text id='kc-score'>
                  学分值:{item.xf}
                </Text>
              </View>
              <Text id='score'>{item.zcj}</Text>
            </View>
          })
        }
      </View>
    )
  }
}

export default HomePage
