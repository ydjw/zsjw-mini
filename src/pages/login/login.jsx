import Taro, {Component} from '@tarojs/taro'
import {AtInput,} from 'taro-ui'

import {Button, Text, View} from '@tarojs/components'

import Api from '../../api/educations'

import './style.less'


class Login extends Component {


  doLogin() {
    let data = {
      'method': 'authUser',
      'xh': 2017411881,
      'pwd': 'a12345678'
    }
    let res = Api.commonGet(data)

    res.then((result) => {
      if (result.data.success) {
        Taro.setStorage({key: 'token', data: result.data.token})
        Taro.navigateTo({
          url: '/pages/home/home'
        })
      }
    })
  }

  render() {
    return (
      <View className='root-view'>
        <View id='top-view'>
          <Text id='app-name'>fasdfdasfdsafdas</Text>
          <Text id='app-desc'>fdasfasdfdsaf </Text>
        </View>
        <View id='bottom-view'>
          <AtInput
            className='input'
            name='value'
            type='text'
            placeholder='标准五个字'
            value={this.state.value}
          />
          <AtInput
            className='input'
            name='value'
            type='password'
            placeholder='标准五个字'
            value={this.state.value}
          />
          <Button onClick={this.doLogin}>点击登陆</Button>
        </View>
      </View>
    )
  }
}

export default Login
