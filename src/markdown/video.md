<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:49:46
-->
<DemoBlock title="Img" desc="ym-img">
   <DemoYmVideo />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoYmVideoCode.vue

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
          `src | 视频路径 | String | - | -`,
          `poster | 视频封面 | String | - | -`,
          `width | 宽度 | Number,String | - | 100%`,
          `height | 高度 | Number,String | - | 49.8%`,
          `isCover | 是否显示遮罩层 | Boolean | - | true`,
          `isImg | 是否显示自定义封面 | Boolean | - | true`,
          `fit | 视频填充方式 | String | object-fit值 | -`,
          `posterFit | 封面填充方式 | String | object-fit值 | -`,
          `position | 图片对齐方式 | String | object-position值 | -`,
          `bgClr | 图片背景色 | String | - | -`,
          `qnUrl | 七牛域名 | String | - | -`,
          `icon | 没有封面时展示的图标 | String | - | ym_img_video`,
          `noIcon | 隐藏播放按钮 | Boolean | - | -`,
          `playIcon | 播放按钮icon | String | - | ym_icon_play`,
          `playIconClr | 播放按钮颜色 | String | - | #999`,
          `noHandler | 没有视频回调 | Function | - | -`,
          `noVideo | 没有视频播放提示 | String | - | -`,
          `offset | 封面图使用第几帧（七牛） | Number | - | 1`
        ],
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 视频内显示内容 | -`,
          `tip | 遮罩层上提示内容 | -`,
        ],
      }
    },

  }
</script>
