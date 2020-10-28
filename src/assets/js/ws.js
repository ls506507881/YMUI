/*
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-07-09 18:32:21
 * @LastEditors: Sue
 * @LastEditTime: 2020-07-10 11:47:19
 */
import { BASE_WS } from '@/config'
// 自动连接
// userInfo = Utils.getItem('userInfo')
// if (userInfo != null) {
//   init()
// }
let ws

// 创建连接
export default function initWs () {
  let userInfo = window.eventBus.$store.state.USER_INFO

  ws = new WebSocket(
    `${BASE_WS}/${userInfo.userType}_${userInfo.id}/${userInfo.token}`
  )
  ws.onopen = function () {
    console.log('创建连接...')
  }
  ws.onmessage = event => {
    const data = event.data
    if (data === '1') {
      return
    }
    window.eventBus.$emit('chat.message', JSON.parse(data))
  }

  ws.onclose = () => {
    console.log('连接被关闭 (5s 重新连接)...')
    let timer = setTimeout(function () {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      initWs()
    }, 5000)
  }
  ws.onerror = e => {
    console.log('连接失败', e)
  }
}
