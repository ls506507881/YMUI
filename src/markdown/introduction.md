<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-14 19:09:34
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-14 13:46:50
-->

# 介绍

::: tip ym-element

ym-element 是基于悦米常用业务场景开发的一些公用组件。

:::

### NPM 安装

```
npm install ym-element -S
```

### 全局引入

```javascript
// main.js
import Vue from 'Vue'

import YmElement from 'ym-element'
import 'ym-element/lib/theme/index.css'

Vue.use(YmElement)
```

### 按需引入

```javascript
// babel.config.js

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'ym-element',
        libraryDirectory: 'lib',
        style: (name, file) => {
          const libDirIndex = name.lastIndexOf('/')
          const libDir = name.substring(0, libDirIndex)
          const fileName = name.substr(libDirIndex + 1)
          if (fileName == 'collapse') return
          return `${libDir}/theme/${fileName}.css`
        }
      },
      'ym-element'
    ]
  ]
}

// 使用
import { SvgIcon } from 'ym-element'
Vue.use(SvgIcon)

// 或者

export default {
  components: {
    SvgIcon
  }
}
```

### 组件

```javascript
SvgIcon
Spinner
Load
Message
FloatBtn
NotFound
Scroll
PanelTitle
Tab
Field
FieldSearch
Selector
Picker
DatePicker
OptionIcon
Img[YmImg]
Video[YmVideo]
```
