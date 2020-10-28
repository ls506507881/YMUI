/*
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-02-03 09:29:27
 * @LastEditors: Sue
 * @LastEditTime: 2020-05-22 15:49:16
 */
// import {
//   IS_FLEX
// } from '@/config'

/**
 * @param {Boolean} [normal = false]
 * @param {Number} [baseFontSize = 100]
 * @param {Number} [fontscale = 1]
 */
const win = window
export default (win.flex = (normal, baseFontSize, fontscale) => {
  const _baseFontSize = baseFontSize || 100
  const _fontscale = fontscale || 1

  const doc = win.document
  const ua = navigator.userAgent
  const matches = ua.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i)

  const UCversion = ua.match(/U3\/((\d+|\.){5,})/i)
  const isUCHd =
    UCversion && parseInt(UCversion[1].split('.').join(''), 10) >= 80
  const isIos = navigator.appVersion.match(/(iphone|ipad|ipod)/gi)
  let dpr = win.devicePixelRatio || 1
  if (!isIos && !(matches && matches[1] > 534) && !isUCHd) {
    // 如果非iOS, 非Android4.3以上, 非UC内核, 就不执行高清, dpr设为1
    dpr = 1
  }
  const scale = normal ? 1 : 1 / dpr

  let metaEl = doc.querySelector('meta[name="viewport"]')
  if (!metaEl) {
    metaEl = doc.createElement('meta')
    metaEl.setAttribute('name', 'viewport')
    doc.head.appendChild(metaEl)
  }
  metaEl.setAttribute(
    'content',
    `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},viewport-fit=cover`
  )
  doc.documentElement.style.fontSize = normal
    ? '50px'
    : `${(_baseFontSize / 2) * dpr * _fontscale}px`
})
// win.flex(false, 100, 1)
// if (IS_FLEX) {
//   win.flex(false, 100, 1)
// } else {
//   win.flex(true, 100, 1)
// }
