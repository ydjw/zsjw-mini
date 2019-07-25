import Taro, {Component, showToast} from '@tarojs/taro'
import {AtInput,} from 'taro-ui'

import {Button, Text, View} from '@tarojs/components'

import Api from '../../api/educations'

import './style.less'


class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  doLogin() {
    let data = {
      'method': 'authUser',
      'xh': this.state.username.trim(), //2017411881
      'pwd': this.state.password.trim()
    }
    let res = Api.commonGet(data)

    res.then((result) => {
      if (result.data.success) {
        Taro.setStorage({key: 'token', data: result.data.token})
        Taro.setStorage({key: "user", data: result.data.user})
        Taro.navigateTo({
          url: '/pages/home/home'
        })
      }
    })
  }

  usernameChange(value) {
    this.setState({
      username: value
    })
  }

  passwordChange(value) {
    this.setState({
      password: value
    })
  }

  render() {
    return (
      <View className='root-view'>
        <View id='top-view'>
          <Text id='app-name'>曲园掌上教务系统</Text>
          <Text id='app-desc'>曲阜师范大学信息门户 </Text>
        </View>
        <View id='bottom-view'>
          <AtInput
            className='input'
            name='value'
            type='text'
            placeholder='请输入账号'
            value={this.state.username}
            onChange={(value) => this.usernameChange(value)}
          />
          <AtInput
            className='input'
            name='value'
            type='password'
            placeholder='请输入密码'
            onChange={(value) => this.passwordChange(value)}
            value={this.state.password}
          />
          <Button onClick={this.doLogin}>点击登陆</Button>
        </View>
      </View>
    )
  }
}

export default Login
