<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:49:11
-->
<DemoBlock title="Message" desc="弹框">
   <DemoMessage />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoMessageCode.vue

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
          `value/v-model | value | Boolean | - | -`,
          `type | 弹框类型 | String | alert,confirm | alert`,
          `icon | 关闭按钮图标 | String | - | ym_icon_close`,
          `isClose | 显示关闭按钮 | Boolean | - | -`,
          `title | 弹框标题 | String | - |  -`,
          `content | 弹框内容 | String | - |  -`,
          `direction | 正文对齐方式 | text-align可选值 | - |  left`,
          `head | 头部内容 | HTML代码 | - |  -`,
          `cancelText | 取消按钮文字 | Number | - |  取消`,
          `confirmText | 确定按钮文字 | Number | - |  确定`,
          `closeOnClickOverlay | 是否点击遮罩关闭 | Boolean | - |  -`,
        ],      
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 弹框主体| -`,
          `header | 弹框头部（无边距）| -`,
          `head | 弹框主体头部（有边距）| -`,
          `btn | 底部按钮| -`,
        ],
      }
    },

  }
</script>
