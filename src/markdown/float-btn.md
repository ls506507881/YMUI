<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:48:50
-->
<DemoBlock title="FloatBtn" desc="float-btn">
   <DemoFloatBtn />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoFloatBtnCode.vue

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
          `isHorizontal | 是否横向拖动 | Boolean | - | true`,
          `isVertical | 是否纵向拖动 | Boolean | - | true`,
          `x | 距离右侧的位置 | Number | - | 20`,
          `y | 距离底部的位置 | Number | - | 200`,
          `parent | 拖动范围元素id | String | - |  document.body`,
        ],      
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 悬浮内容| -`,
        ],
      }
    },

} </script>
