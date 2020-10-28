<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:49:19
-->
<DemoBlock title="OptionIcon" desc="option-icon">
   <DemoOptionIcon />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoOptionIconCode.vue

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
          `value/v-model | value | String,Number,Boolean | - | -`,
          `name | 显示内容 | String,Number,Boolean | - | -`,
          `type | 类型 | String | check,radio | check`,
          `hideName | 隐藏显示内容 | Boolean | - | -`
        ],
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 显示内容 | -`,
        ],
      }
    },

  }
</script>
