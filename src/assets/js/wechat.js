// import wx from 'weixin-js-sdk'
import { post } from '@/api/http'
// import axios from 'axios'
import { wxOpt } from '@/config'
// import querystring from 'querystring'
const wx = window.wx

// wechat-获取时间戳
export function getTimeStamp () {
  let tmp = Date.parse(new Date()).toString()
  tmp = tmp.substr(0, 10)
  return tmp
}

// wechat-获取随机32位字符串
export function getNonceStr () {
  let $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let maxPos = $chars.length
  let noceStr = ''
  for (let i = 0; i < 32; i++) {
    noceStr += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return noceStr
}

export function getWxSign (url = location.href, cb) {
  let nonceStr = getNonceStr()
  let timestamp = getTimeStamp()
  // 获取签名的参数
  let params = {
    noncstr: nonceStr,
    timestamp: timestamp,
    url: url
  }

  // 根据微信要求获取签名的算法要在服务器端实现。由后端给出接口,前端传递 随机字符串、分享链接、时间戳、公众号code名称
  // 公众号的code是为了寻找到当前的公众号的token从而获取签名
  // 后端会处理token，因为token是2小时就过期，谨记如果过期就再请求一次刷新token
  post('/auth-qy/sign/', params).then(rsp => {
    if (rsp.status === 201) {
      let sign = rsp.data.sign
      // if (cb && typeof cb === "function") {
      wx.config({
        debug: wxOpt.debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: wxOpt.appId, // 必填，公众号的唯一标识
        timestamp: timestamp, // 必填，生成签名的时间戳
        nonceStr: nonceStr, // 必填，生成签名的随机串
        signature: sign, // 必填，签名，见附录1
        jsApiList: wxOpt.jsApis // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      })
      wx.ready(() => {
        setTimeout(() => {
          if (cb && typeof cb === 'function') {
            console.log('ready')
            cb(wx)
          }
        })
      }, 500)
      wx.error(function (res) {
        console.log(res)
      })
    }
  })
}

// 禁止分享
export function hideOptionMenu () {
  function onBridgeReady () {
    WeixinJSBridge.call('hideOptionMenu') // eslint-disable-line
  }

  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
    setTimeout(() => {
      onBridgeReady()
    }, 500)
  }
}

export function showOptionMenu () {
  function onBridgeReady () {
    WeixinJSBridge.call('showOptionMenu') // eslint-disable-line
  }

  if (typeof WeixinJSBridge === 'undefined') {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
    } else if (document.attachEvent) {
      document.attachEvent('WeixinJSBridgeReady', onBridgeReady)
      document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
    }
  } else {
    onBridgeReady()
    setTimeout(() => {
      onBridgeReady()
    }, 500)
  }
}

export function share ({ title, desc, imgUrl, link, type }, cb) {
  // let url = changeUrl(link)
  getWxSign(window.signUrl, wx => {
    // 隐藏复制链接按钮
    wx.hideMenuItems({
      menuList: ['menuItem:copyUrl']
    })
    wx.showMenuItems({
      menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']
    })
    setShare({ title, desc, imgUrl, link, type }, cb)
  })
}

export function setShare ({ title, desc, imgUrl, link, type }, cb) {
  wx.onMenuShareAppMessage({
    title,
    desc,
    link,
    imgUrl,
    success: res => {
      // console.log(res)
      if ((!type || type === 'app') && cb && typeof cb === 'function') {
        cb()
      }
    }
  })
  wx.onMenuShareTimeline({
    title,
    link,
    imgUrl,
    success: res => {
      // console.log(res)
      if ((!type || type === 'timeline') && cb && typeof cb === 'function') {
        setTimeout(() => {
          cb()
        }, 100)
      }
    }
  })
}

// 开始录音接口
export function startRecord (cb, onCB) {
  wx.startRecord({
    success: function () {
      sessionStorage.setItem('allowRecord', 'true')
      if (cb && typeof cb === 'function') {
        // 可以录音
        cb()
      }
      if (onCB && typeof onCB === 'function') {
        // 监听录音自动停止接口
        wx.onVoiceRecordEnd({
          complete: function (rsp) {
            onCB(rsp)
            // var localId = res.localId;
          }
        })
      }
    },
    cancel: function () {
      alert('您拒绝授权录音功能，同意后方可使用语音功能')
    }
  })
}
// 停止录音接口
export function stopRecord (cb) {
  wx.stopRecord({
    success: function (rsp) {
      // var localId = res.localId;
      if (cb && typeof cb === 'function') {
        cb(rsp)
      }
    }
  })
}
// 播放录音
export function playVoice (localId, cb) {
  wx.playVoice({
    localId
  })
  if (cb && typeof cb === 'function') {
    // 语音播放完毕
    wx.onVoicePlayEnd({
      success: function (rsp) {
        cb(rsp)
        // var localId = res.localId;
      }
    })
  }
}
// 上传语音接口
export function uploadVoice (localId, cb) {
  wx.uploadVoice({
    localId, // 需要上传的音频的本地ID，由stopRecord接口获得
    isShowProgressTips: 1, // 默认为1，显示进度提示
    success: function (rsp) {
      if (cb && typeof cb === 'function') cb(rsp)
    }
  })
}
// 暂停播放
export function pauseVoice (localId) {
  wx.pauseVoice({ localId })
}
// 停止播放
export function stopVoice (localId) {
  wx.stopVoice({ localId })
}
