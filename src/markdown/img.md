<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:49:01
-->
<DemoBlock title="Img" desc="ym-img">
   <DemoYmImg />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoYmImgCode.vue

  </highlight-code>
</DemoBlock>

<DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/>
<DemoTable title="Slots" :tableBody="slotBody" :tableHead="slotHead"/>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `src | 图片路径 | String | - | -`,
          `alt | 图片描述 | String | - | -`,
          `width | 宽度 | Number,String | - | -`,
          `height | 高度 | Number,String | - | -`,
          `fit | 图片填充方式 | String | object-fit值 | -`,
          `position | 图片对齐方式 | String | object-position值 | -`,
          `bgClr | 图片背景色 | String | - | -`,
          `imgs | 预览图片列表 | Array | - | -`,
          `index | 当前图片索引 | Number | - | -`,
          `preview | 是否预览 | Boolean | - | -`,
          `qnUrl | 七牛域名 | String | - | -`,
          `noLazy | 不启用懒加载 | Boolean | - | -`,
          `showIcon | 只展示图标 | Boolean | - | -`,
          `icon | 展示的图标 | String | - | ym_img_loading`,
          `showLoading | 是否展示加载中图标(不启用懒加载) | Boolean | - | true`,
          `showError | 是否展示加载失败图标(不启用懒加载) | Boolean | - | true`,
          `loadingIcon | 加载中显示icon | String | - | ym_img_loading`,
          `errorIcon | 加载失败显示icon | String | - | ym_img_error`
        ],
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 图片内显示内容 | -`,
          `loading | 自定义加载中显示内容 | -`,
          `error | 自定义加载失败显示内容 | -`,
          `icon | 自定义只显示时，位置显示内容 | -`,
        ],
      }
    },

  }
</script>
