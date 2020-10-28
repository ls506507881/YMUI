import { isIOS } from './utils'
import { BASE_URL, BASE_PATH, QN_URL, wxOpt } from '@/config'

export const Global = {
  data () {
    return {
      LOAD: false,
      mclr: 'rgba(52, 161, 108, 1)',
      lclr: 'rgba(34, 35, 38, 0.7)',
      mlclr: 'rgba(34, 35, 38, 0.5)',
      hlclr: 'rgba(34, 35, 38, 0.35)'
    }
  },
  computed: {
    _devPR () {
      return Number.parseInt(window.document.documentElement.style.fontSize) / 50
      // if (
      //   ~NO_VIEWPORT.indexOf(this.$route.path) ||
      //   ~NO_VIEWPORT.indexOf(this.$route.fullPath)
      // ) {
      //   return 1
      // } else {
      //   return window.devicePixelRatio
      // }
    }
  },
  methods: {
    /**
     * @method
     * @name: _getWxAuth
     * @description: 获取本地openid并去除两端空格
     * @param: null
     * @return: {String} [openid]
     */
    _getWxAuth () {
      let wxAuth = (localStorage.getItem(wxOpt.checkAuth) || '').trim()
      if (!wxAuth) {
        return
      }
      return wxAuth
    },

    /**
     * @method
     * @name: _showPageLoad
     * @description: 页面加载全屏loading
     * @param: {Function} [cb]
     * @return: null
     */
    _showPageLoad (cb) {
      this.$_load.show()
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        this.$_load.hide()
        if (cb && typeof cb === 'function') {
          cb()
        }
      }, 1000)
    },
    /**
     * @method
     * @name: _showLoad
     * @description: 请求加载load，作用于页面元素的指令值
     * @param: {Function} [cb]
     * @return: null
     */
    _showLoad (cb) {
      this.LOAD = true
      let timer = setTimeout(() => {
        if (timer) {
          clearTimeout(timer)
          timer = null
        }
        this.LOAD = false
        if (cb && typeof cb === 'function') {
          cb()
        }
      }, 1000)
    },
    _to (route) {
      this.$router.push(route)
    },
    _replace (route) {
      this.$router.replace(route)
    },
    _go (num = -1) {
      this.$router.go(num)
    },
    _closeWindow () {
      WeixinJSBridge.call('closeWindow') // eslint-disable-line
    },
    /**
     * @method
     * @name: _toast
     * @description: 提示弹层
     * @param: {String} [message] 提示消息
     * @param: {Object} [options] 配置项
     * @return: null
     */
    _toast (message, options) {
      this.$toast({
        message,
        type: 'html',
        ...options
      })
    },
    /**
     * @method
     * @name: _showLoading
     * @description: 显示加载弹层
     * @param: {Object} [options] 配置项
     * @return: null
     */
    _showLoading (options) {
      this.$toast.loading({
        duration: 0,
        forbidClick: true,
        ...options
      })
    },
    /**
     * @method
     * @name: _hideLoading
     * @description: 隐藏加载弹层
     * @param: null
     * @return: null
     */
    _hideLoading () {
      this.$toast.clear()
    },
    /**
     * @method
     * @name: _alert
     * @description: 警告弹框
     * @param: {Object} [options] 配置项
     * @return: null
     */
    _alert (options) {
      return new Promise((resolve, reject) => {
        this.$dialog
          .alert({
            confirmButtonText: '确定',
            ...options
          })
          .then(() => {
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    /**
     * @method
     * @name: _confirm
     * @description: 提示弹框
     * @param: {Object} [options] 配置项
     * @return: null
     */
    _confirm (options) {
      return new Promise((resolve, reject) => {
        this.$dialog
          .confirm({
            confirmButtonText: '确定',
            ...options
          })
          .then(() => {
            resolve()
          })
          .catch((e) => {
            reject(e)
          })
      })
    }
  }
}

export const YXYX = {
  computed: {
    userType () {
      return this.$store.getters._userType
    }
  }
}

export const Auth = {
  /**
   * @method
   * @name: _checkAuth
   * @description: 检测是否注册
   * @param: {Boolean} [isAuth] 是否注册
   * @param: {Function} [cb] 如果注册，hui diao han shu
   * @return: null
   */
  methods: {
    _checkAuth (cb, type, noPrev) {
      let isAuth = this.$store.getters._isAuth
      if (!isAuth) {
        this._alert({
          title: '您还未注册',
          message: '',
          confirmButtonText: '去注册'
        }).then(() => {
          let path = '/auth'
          if (!noPrev) {
            path = `/auth?prev=${encodeURIComponent(this.$route.fullPath)}`
          }
          this._to(path)
        })
        return
      }
      if (type && this.$store.getters._userType != type) {
        this._alert({
          title: '您无权访问该模块',
          message: '',
          confirmButtonText: '关闭'
        }).then(() => {
          this._closeWindow()
        })
        return
      }
      if (cb && typeof cb === 'function') cb()
    }
  }
}

export const CheckForm = {
  methods: {
    /**
     * @method
     * @name: _checkCode
     * @description: 验证验证码
     * @param: {String} [code] 验证码
     * @return: {Boolean}
     */
    _checkCode (code) {
      let re = /^\d{4}$/
      return re.test(code)
    },
    /**
     * @method
     * @name: _checkTel
     * @description: 验证手机号
     * @param: {String} [tel] 手机号
     * @return: {Boolean}
     */
    _checkTel (tel) {
      let re = /^1\d{10}$/
      return re.test(tel)
    },
    /**
     * @method
     * @name: _checkEmail
     * @description: 验证邮箱
     * @param: {String} [email] 邮箱
     * @return: {Boolean}
     */
    _checkEmail (email) {
      /* eslint-disable no-useless-escape */
      let re = /\w+((-w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+/

      return re.test(email)
    },
    // 验证是否为空
    /**
     * @method
     * @name: _checkEmpty
     * @description: 验证是否为空
     * @param: {object} [source] 原数据
     * @param: {Array} [exclude] 排除检测字段
     * @return: {Boolean}
     */
    _checkEmpty (source, exclude) {
      for (let key in source) {
        if (exclude && exclude.indexOf(key) !== -1) {
          continue
        }
        if (source[key] === null || source[key] === undefined) {
          return false
        }
        if (source[key].constructor === Array && source[key].length === 0) {
          return false
        }
        if (source[key] === '') {
          return false
        }
      }
      return true
    }
  }
}

export const Link = {
  methods: {
    _back (path, route) {
      let backList = JSON.parse(sessionStorage.getItem('back_list') || '[]')
      if (~backList.indexOf(path)) {
        this._go()
      } else {
        this._replace(route || path)
      }
    },
    /**
     * @method
     * @name: _jumpTo
     * @description: 判断链接并跳转至指定链接
     * @param: {String} [item] 跳转对象数据
     * @param: {String} [path] 跳转路由前缀
     * @return: null
     */
    _jumpTo (url, isReplace) {
      let link = url
      if (!link) {
        this._toast('正在建设中~')
        return
      }
      let reg = /^\//g
      if (reg.test(link)) {
        if (isReplace) {
          this._replace(link)
        } else {
          this._to(link)
        }
        return
      }

      if (
        ~link.indexOf(`${location.origin}${BASE_PATH}`) ||
        ~link.indexOf(`${BASE_URL}${BASE_PATH}`)
      ) {
        let path = link
          .replace(location.origin, '')
          .replace(BASE_URL, '')
          .replace(BASE_PATH, '')
        if (path === this.$route.fullPath) {
          // this.reload()
          return
        }
        if (isReplace) {
          this._replace(path)
        } else {
          this._to(path)
        }
        return
      }
      if (!~link.indexOf('http://') && !~link.indexOf('https://')) {
        link = `http://${link}`
      }

      location.href = link
    },
    _getQN (src) {
      let url = src
        .replace(QN_URL, '')
        .replace('./', '')
        .replace('/', '')
      return `${QN_URL}/${url}`
    },
    /**
     * @method
     * @name: _checkPrev
     * @description: 获取链接中上一个页面的路由
     * @param: null
     * @return: {Object} [{path = '',query = {}}]
     */
    _checkPrev (route) {
      if (!this.$route.query.prev) {
        this._replace(route)
        return
      }
      let prev = decodeURIComponent(this.$route.query.prev)
      if (!~prev.indexOf('http')) {
        this._replace(prev)
        return
      }
      if (!~prev.indexOf(location.origin + BASE_PATH)) {
        location.href = prev
        return
      }
      let arr = prev.split('?')
      let path = arr[0]
      let query = {}
      if (arr && arr.length > 1) {
        let queryStrs = prev.split('?')[1].split('&')
        queryStrs.forEach((item) => {
          let arr = item.split('=')
          query[arr[0]] = arr[1]
        })
      }
      return this._replace({ path: path, query: query })
    },
    /**
     * @method
     * @name: _shareHref
     * @description: 获取分享的链接
     * @param: null
     * @return: {String} [url]
     */
    _shareHref () {
      if (isIOS() && this.$route.path !== location.pathname.replace(BASE_PATH, '')) {
        return location.origin + BASE_PATH + this.$route.fullPath
      }
      return location.href
    }
  }
}
export const Style = {
  methods: {
    getSize (size) {
      return size * this._devPR
    },
    /**
     * @method
     * @name: _
     * @description: 将富文本中的px转成rem
     * @param: {String} [content] 富文本内容
     * @return: {String} [str]
     */
    _ (content) {
      if (!content) return
      let reg = /([:|(]*)(\s*)([-|+\d+.*\d+]+)(px)/g
      let str = content.replace(reg, (content, $1, space, $2) => {
        return $1 + space + parseInt($2) / 50 + 'rem'
      })
      let regPt = /([:|(]*)(\s*)([-|+\d+.*\d+]+)(pt)/g
      str = str.replace(regPt, (content, $1, space, $2) => {
        return $1 + space + ((parseInt($2) / 50) * 130) / 100 + 'rem'
      })
      // 去除DOM间的空格：解决inline-block间距问题
      let regSpace = /(>)(\s)+(<)/g
      str = str.replace(regSpace, (content, $1, space, $2) => {
        return $1 + $2
      })
      return str
    },
    /**
     * @method
     * @name: _getUnit
     * @description: 将富文本中的px转成rem
     * @param: {String} [content] 富文本内容
     * @return: {String} [str]
     */

    _getUnit (num) {
      return num / 50 + 'rem'
    },
    /**
     * @method
     * @name: _getEm
     * @description: 获取指定行数的高度
     * @param: {Number}} [line] 行数
     * @param: {Number}} [lh] 行高
     * @return: {String}} em单位的高度
     */

    _getEm (line, lh = 1.4) {
      return `${line * lh}em`
    }
  }
}
