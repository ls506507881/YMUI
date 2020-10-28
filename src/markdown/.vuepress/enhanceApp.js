/*
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-14 19:09:34
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 14:13:00
 */
import { Table, TableColumn } from 'element-ui'

import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/atom-one-dark.css'
import Card from '../../examples/components/card.vue'
import CardItem from '../../examples/components/card-item.vue'
import DemoSvgIcon from '../../examples/components/DemoSvgIcon.vue'
import DemoSpinner from '../../examples/components/DemoSpinner.vue'
import DemoLoad from '../../examples/components/DemoLoad.vue'
import DemoMessage from '../../examples/components/DemoMessage.vue'
import DemoFloatBtn from '../../examples/components/DemoFloatBtn.vue'
import DemoNotFound from '../../examples/components/DemoNotFound.vue'
import DemoScroll1 from '../../examples/components/DemoScroll1.vue'
import DemoScroll2 from '../../examples/components/DemoScroll2.vue'
import DemoPanelTitle from '../../examples/components/DemoPanelTitle.vue'
import DemoTab1 from '../../examples/components/DemoTab1.vue'
import DemoTab2 from '../../examples/components/DemoTab2.vue'
import DemoTab3 from '../../examples/components/DemoTab3.vue'
import DemoTab4 from '../../examples/components/DemoTab4.vue'
import DemoTab5 from '../../examples/components/DemoTab5.vue'
import DemoTab6 from '../../examples/components/DemoTab6.vue'
import DemoSearch from '../../examples/components/DemoSearch.vue'
import DemoField from '../../examples/components/DemoField.vue'
import DemoFieldSearch from '../../examples/components/DemoFieldSearch.vue'
import DemoSelector from '../../examples/components/DemoSelector.vue'
import DemoPicker from '../../examples/components/DemoPicker.vue'
import DemoDatePicker from '../../examples/components/DemoDatePicker.vue'
import DemoOptionIcon from '../../examples/components/DemoOptionIcon.vue'
import DemoYmImg from '../../examples/components/DemoYmImg.vue'
import DemoYmVideo from '../../examples/components/DemoYmVideo.vue'

// import libs from '../../lib'
import '../../lib/theme/index.css'

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Vue.component(DemoYmVideo.name, DemoYmVideo)
  Vue.component(DemoYmImg.name, DemoYmImg)
  Vue.component(DemoOptionIcon.name, DemoOptionIcon)
  Vue.component(DemoDatePicker.name, DemoDatePicker)
  Vue.component(DemoPicker.name, DemoPicker)
  Vue.component(DemoSelector.name, DemoSelector)
  Vue.component(DemoFieldSearch.name, DemoFieldSearch)
  Vue.component(DemoField.name, DemoField)
  Vue.component(DemoSearch.name, DemoSearch)
  Vue.component(DemoTab6.name, DemoTab6)
  Vue.component(DemoTab5.name, DemoTab5)
  Vue.component(DemoTab4.name, DemoTab4)
  Vue.component(DemoTab3.name, DemoTab3)
  Vue.component(DemoTab2.name, DemoTab2)
  Vue.component(DemoTab1.name, DemoTab1)
  Vue.component(DemoPanelTitle.name, DemoPanelTitle)
  Vue.component(DemoScroll2.name, DemoScroll2)
  Vue.component(DemoScroll1.name, DemoScroll1)
  Vue.component(DemoNotFound.name, DemoNotFound)
  Vue.component(DemoFloatBtn.name, DemoFloatBtn)
  Vue.component(DemoMessage.name, DemoMessage)
  Vue.component(DemoLoad.name, DemoLoad)
  Vue.component(DemoSpinner.name, DemoSpinner)
  Vue.component(DemoSvgIcon.name, DemoSvgIcon)
  Vue.component(CardItem.name, CardItem)
  Vue.component(Card.name, Card)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(VueHighlightJS)
  // Vue.mixin({
  //   mounted () {
  //     const libs = require('../../lib')
  //     Vue.use(libs)

  //     import('../../lib').then(function (m) {
  //       Vue.use(m.default)
  //     })
  //   }
  // })
}
