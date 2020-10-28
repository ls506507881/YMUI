/*
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-19 17:23:14
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-14 18:46:25
 */
const pkg = require('../../package.json')
module.exports = {
  title: pkg.name,
  description: '悦米公用组件库',
  base: '/static/document/',
  cache: false,
  themeConfig: {
    search: false,
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/introduction' }
    ],
    sidebar: {
      '/': [
        {
          title: '简介',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: 'introduction',
              collapsable: false
            },
            {
              title: 'SvgIcon',
              path: 'svg-icon',
              collapsable: false
            },
            {
              title: 'Spinner',
              path: 'spinner',
              collapsable: false
            },
            {
              title: 'Load',
              path: 'load',
              collapsable: false
            },
            {
              title: 'Message',
              path: 'message',
              collapsable: false
            },
            {
              title: 'FloatBtn',
              path: 'float-btn',
              collapsable: false
            },
            {
              title: 'NotFound',
              path: 'not-found',
              collapsable: false
            },
            {
              title: 'Scroll',
              path: 'scroll',
              collapsable: false
            },
            {
              title: 'PanelTitle',
              path: 'panel-title',
              collapsable: false
            },
            {
              title: 'Tab',
              path: 'tab',
              collapsable: false
            },
            {
              title: 'Search',
              path: 'search',
              collapsable: false
            },
            {
              title: 'Field',
              path: 'field',
              collapsable: false
            },
            {
              title: 'OptionIcon',
              path: 'option-icon',
              collapsable: false
            },
            {
              title: 'Img',
              path: 'img',
              collapsable: false
            },
            {
              title: 'Video',
              path: 'video',
              collapsable: false
            }
          ]
        }
      ]
    },
    sidebarDepth: 1
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',

    // 放大
    ['@vuepress/medium-zoom', { selector: 'img' }]
  ]
}
