import { wxOpt } from '@/config'

/**
 * @method
 * @name: queryUrl
 * @description: 获取url中的query参数
 * @param: {String} [key] 需要获取的参数名
 * @return: {String} 指定的参数值
 */
export function queryUrl (key) {
  let name, value
  let str = moreCheck(location.href, key) // 取得整个地址栏
  // let str = location.href
  let num = str.indexOf('?')
  str = str.substr(num + 1) // 取得所有参数
  let arr = str.split('&') // 各个参数放到数组里
  let json = {}
  for (let i = 0; i < arr.length; i++) {
    num = arr[i].indexOf('=')
    if (num > 0) {
      name = arr[i].substring(0, num)
      value = arr[i].substr(num + 1)
      json[name] = value
    }
  }
  if (!key) {
    return json
  }
  return json[key]
}
/**
 * @method
 * @name: moreCheck
 * @description: 深度检测，链接中如果有两个?，以后面的为准
 * @param: {String} [query] 检测的链接
 * @param: {String} [key] 需要获取的参数名
 * @return: {String} 指定的参数值
 */
export function moreCheck (query, key) {
  let str = query // 取得整个地址栏
  let num = str.indexOf('?')
  let strArr = []
  str = str.substr(num + 1)
  if (~str.indexOf('?')) {
    strArr = str.split('?')
    if (~strArr[0].indexOf(key + '=')) {
      return moreCheck(strArr[0], key)
    }
    if (~strArr[1].indexOf(key + '=')) {
      return moreCheck(strArr[1], key)
    }
    return moreCheck(str, key)
  }
  return str
}

/**
 * @method
 * @name: deepCopy
 * @description: 深层copy
 * @param: {Object} [source] 检测的数据对象
 * @return: {Object} copy后的数据
 */
export function deepCopy (source) {
  let res = null
  if (source === null || source === undefined) {
    res = source
    return res
  }
  if (source.constructor === Object) {
    res = {}
    for (var key in source) {
      if (source[key] === null || source[key] === undefined) {
        res[key] = source[key]
        continue
      }
      if (source[key].constructor === Object || source[key].constructor === Array) {
        res[key] = deepCopy(source[key])
      } else {
        res[key] = source[key]
      }
    }
  } else if (source.constructor === Array) {
    res = []
    source.forEach((item, index) => {
      if (item === null || item === undefined) {
        res[index] = item
      }
      if (item.constructor === Object || item.constructor === Array) {
        res[index] = deepCopy(item)
      } else {
        res[index] = item
      }
    })
  } else {
    res = source
  }
  return res
}
/* eslint-disable */
/**
 * @method
 * @name: isObjectEqual
 * @description: 两个变量是否相等
 * @param: {Object} [a] 检测对象1
 * @param: {Object} [b] 检测对象2
 * @param: {Array} [exclude = []] 排除检测的字段
 * @return: {Boolean} 两个数据是否相等
 */
export function isObjectEqual (a, b, exclude = []) {
  // null | undefined
  if (a === b) return true

  // not object

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false
  }
  if (a.constructor !== b.constructor) {
    return false
  }
  for (let key in a) {
    if (a.hasOwnProperty(key) && exclude.indexOf(key) === -1) {
      if (!b.hasOwnProperty(key)) {
        return false
      }
      if (a[key] == b[key]) {
        continue
      }
      if (exclude && exclude.indexOf(key) !== -1) {
        continue
      }

      if (typeof a[key] !== 'object') {
        return false
      }

      if (!isObjectEqual(a[key], b[key])) {
        return false
      }
    }
  }
  for (let key in b) {
    if (b.hasOwnProperty(key) && !a.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}
/* eslint-disable */
/**
 * @method
 * @name: _debounce
 * @description: 防抖：某一段时间内只执行一次,常用于搜索联想，window-resize
 * @param: {Function} [fn]
 * @param: {Number} [delay] 延迟ms
 * @return: null
 */
var dTimer = null
export function _debounce (fn, delay) {
  // let timer = null
  return function () {
    let args = arguments
    let context = this

    if (dTimer) {
      clearTimeout(dTimer)

      dTimer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    } else {
      dTimer = setTimeout(function () {
        fn.apply(context, args)
      }, delay)
    }
  }
}
/**
 * @method
 * @name: _throttle
 * @description: 节流：间隔时间执行,常用于鼠标不断点击，滚动事件
 * @param: {Function} [fun]
 * @param: {Number} [delay] 延迟ms
 * @return: null
 */
var last, deferTimer
export function _throttle (fun, delay) {
  return function (args) {
    let that = this
    let _args = arguments
    let now = +new Date()
    if (last && now < last + delay) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function () {
        last = now
        fun.apply(that, _args)
      }, delay)
    } else {
      last = now
      fun.apply(that, _args)
    }
  }
}
/**
 * @method
 * @name: checkAuth
 * @description: 检测openid：检测链接，有-存入本地，去除链接上的openid；没有-跳转授权
 * @param: null
 * @return: Boolean true-本地中存有openid
 */
export function checkAuth (cb) {
  let currentUrl = location.href
  let key = wxOpt.checkAuth || 'openid'
  let auth = localStorage.getItem(key)
  let name = localStorage.getItem('nickname')
  let avatar = localStorage.getItem('headimg')
  // 链接有授权信息
  if (checkQuery()) {
    changeUrl(currentUrl, key)
    return false
  }
  // 本地没有授权信息
  if (!auth) {
    if (cb && typeof cb == 'function') {
      cb()
      return
    }
    location.href = getWxAuth()
    return false
  }
  // 需要用户详细信息，本地缺少相关授权信息
  if ((wxOpt.authType == 2 || wxOpt.authType == 4) && (!name || !avatar)) {
    if (cb && typeof cb == 'function') {
      cb()
      return
    }
    location.href = getWxAuth()
    return false
  }
  return true
}

function checkQuery () {
  let key = wxOpt.checkAuth || 'openid'
  let queryAuth = decodeURIComponent(queryUrl(key) || '')
  if (!queryAuth) return
  localStorage.setItem(key, queryAuth)
  if (wxOpt.authType == 2 || wxOpt.authType == 4) {
    let queryName = decodeURIComponent(queryUrl('nickname') || '')
    let queryAvatar = decodeURIComponent(queryUrl('headimg') || '')
    if (queryName && queryAvatar) {
      localStorage.setItem('nickname', queryName)
      localStorage.setItem('headimg', queryAvatar)
      return true
    } else {
      return false
    }
  }
  return true
}

export function getWxAuth () {
  var targetUrl = location.href
  let ymuurl
  let oauth_url
  switch (wxOpt.authType) {
    case 1:
      // 2.0 openid
      ymuurl = `http://wechat.yuemia.com/oauth?wx=${wxOpt.wx}&type=1&url=${encodeURIComponent(
        targetUrl
      )}`

      oauth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        wxOpt.appId
      }&redirect_uri=${encodeURIComponent(
        ymuurl
      )}&response_type=code&scope=snsapi_base&state=O#wechat_redirect`
      break
    case 2:
      // 2.0 详细
      ymuurl = `http://wechat.yuemia.com/oauth?wx=${wxOpt.wx}&type=2&url=${encodeURIComponent(
        targetUrl
      )}`
      auth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        wxOpt.appId
      }&redirect_uri=${encodeURIComponent(
        ymuurl
      )}&response_type=code&scope=snsapi_&state=O#wechat_redirect`
      break
    case 4:
      // 第三方详细
      ymuurl = `http://wechat.yuemia.com/tpoauth?wx=${wxOpt.wx}&type=2&url=${encodeURIComponent(
        targetUrl
      )}`
      oauth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        wxOpt.appId
      }&redirect_uri=${encodeURIComponent(
        ymuurl
      )}&response_type=code&scope=snsapi_userinfo&state=OAI&component_appid=wx3bdff41758875b0d#wechat_redirect`
      break
    case 5:
      ymuurl = `http://wechat.yuemia.com/oauth?wx=${wxOpt.wx}&type=1&url=${encodeURIComponent(
        targetUrl
      )}`

      oauth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        wxOpt.appId
      }&redirect_uri=${encodeURIComponent(
        ymuurl
      )}&response_type=code&scope=snsapi_base&state=O#wechat_redirect`
    case 3:
    default:
      // 第三方openid
      ymuurl = `http://wechat.yuemia.com/tpoauth?wx=${wxOpt.wx}&type=1&url=${encodeURIComponent(
        targetUrl
      )}`

      oauth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
        wxOpt.appId
      }&redirect_uri=${encodeURIComponent(
        ymuurl
      )}&response_type=code&scope=snsapi_base&state=O&component_appid=wx3bdff41758875b0d#wechat_redirect`
  }
  return oauth_url
}
/**
 * @method
 * @name: changeUrl
 * @description: 去除链接上的openid
 * @param: {String} [currentUrl] 需要处理的链接
 * @return: null
 */
export function changeUrl (currentUrl, key) {
  // let currentUrl = location.href
  // 找到 openid= 的位置
  let openidIndex = currentUrl.indexOf(`${key}=`)
  // 找到 openid= 之后 的第一个 & 的位置
  // console.log(openidIndex)
  let openidLastIndex = currentUrl.indexOf('&', openidIndex)
  // 定义新的链接为空
  let shortURL = ''
  if (openidLastIndex > -1) {
    // 如果 openid= 之后还有参数
    let leftStr = currentUrl.substring(0, openidIndex) // 左边截取到openid=的位置
    let rightStr = currentUrl.substring(openidLastIndex + 1) // 右边从openid=之后的第一个&的位置+1 截取后面全部的参数
    shortURL = leftStr + rightStr // 拼接新的链接
  } else {
    shortURL = currentUrl.substring(0, openidIndex - 1)
    // 如果没有后续的参数，就把openid=直到最后截取掉，注意前面需要多截取一位: &或者？
  }
  console.log(shortURL)
  let timestamp = new Date().valueOf()
  location.href = ~shortURL.indexOf('?')
    ? `${shortURL}&t=${timestamp}`
    : `${shortURL}?t=${timestamp}`
}
/**
 * @method
 * @name: isIOS
 * @description: 是否是IOS
 * @param: null
 * @return: {Boolean}
 */
export function isIOS () {
  var isIphone = navigator.userAgent.indexOf('iPhone') !== -1
  var isIpad = navigator.userAgent.indexOf('iPad') !== -1
  return isIphone || isIpad
}
/**
 * @method
 * @name: isPC
 * @description: 是否是isPC
 * @param: null
 * @return: {Boolean}
 */
export function isPC () {
  var userAgentInfo = navigator.userAgent
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  var flag = true
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
/**
 * @method
 * @name: move
 * @description: 交换数组元素
 * @param: {Number} [nInd] 新的下标
 * @param: {Number} [oInd] 原下标
 * @return: null
 */
export function move (nInd, oInd) {
  if (nInd === oInd) return
  this.splice(nInd, 0, this.splice(oInd, 1).shift())
}
/**
 * @method
 * @name: sumArr
 * @description: 数组求和
 * @param: {Array} [arr] 数组
 * @return: null
 */
export function sumArr (arr) {
  return arr.reduce(function (prev, cur) {
    return prev + cur
  }, 0)
}
/**
 * @method
 * @name: getLength
 * @description: 获取字节长度
 * @param: {String} [val] 字符串
 * @return: {Number} 返回字符串字节
 */
export function getLength (val) {
  var str = new String(val)
  var bytesCount = 0
  for (var i = 0, n = str.length; i < n; i++) {
    var c = str.charCodeAt(i)
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
      bytesCount += 1
    } else {
      bytesCount += 2
    }
  }
  return bytesCount
}

/**
 * @method
 * @name: copyObj
 * @description: 深copy
 * @param: {Object} [original] 原始数据
 * @param: {Object} [target] 目标数据
 * @return: {Number} 返回copy后的数据
 */
export function copyObj (original, target) {
  let info = {}
  for (let key in original) {
    if (typeof target[key] === 'undefined' || target[key] === null || target[key] === 'undefined') {
      info[key] = original[key]
    } else {
      info[key] = target[key]
    }
  }
  return info
}
/**
 * @method
 * @name: _getDate
 * @description: 获取不同日期格式
 * @param: {String} [date] 需要格式化的日期
 * @return: {Array} []
 * [
 *  0:yyyy-MM-dd,
 *  1:y,
 *  2:m,
 *  3:d,
 *  4:yyyy-M-d,
 *  5:*th
 *  6:value,
 *  7:yyyy年M月d日,
 *  8:yyyy-M-d,
 *  9:HH:mm
 *  10:yyyy/M/d HH:mm,
 *  11:yyyy-MM-dd HH:mm,
 *  12:yyyy年M月d日 HH:mm,
 *  13:yyyy/MM/dd,
 * ]
 */
export function _getDate (date) {
  let dt = null
  if (date && ~(date + '').indexOf('-')) {
    dt = new Date(date.replace(/-/g, '/'))
  } else if (date) {
    dt = new Date(date)
  } else {
    dt = new Date()
  }

  let y = dt.getFullYear()
  let m = dt.getMonth()
  let d = dt._getDate()
  let dd = dt.getDay()
  let hh = dt.getHours()
  let mm = dt.getMinutes()

  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm

  return [
    `${y}-${m < 9 ? '0' + (m + 1) : m + 1}-${d < 10 ? '0' + d : d}`,
    y,
    m + 1,
    d,
    `${y}-${m + 1}-${d}`,
    dd,
    dt.valueOf(),
    `${y}年${m + 1}月${d}日`,
    `${y}/${m + 1}/${d}`,
    `${hh}:${mm}`,
    `${y}/${m + 1}/${d} ${hh}:${mm}`,
    `${y}-${m < 9 ? '0' + (m + 1) : m + 1}-${d < 10 ? '0' + d : d} ${hh}:${mm}`,
    `${y}年${m + 1}月${d}日 ${hh}:${mm}`,
    `${y}/${m < 9 ? '0' + (m + 1) : m + 1}/${d < 10 ? '0' + d : d}`
  ]
}
