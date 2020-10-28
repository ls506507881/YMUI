<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-09-27 16:55:28
-->
<DemoBlock title="Load" desc="load">
   <DemoLoad />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoLoadCode.vue

  </highlight-code>
</DemoBlock>

<DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `show | 是否显示 | Boolean | - | -`,
          `type | loading样式 | String | - | lines`,
          `size | 大小 | Number | - | 10`
        ],
      }
    },

  }
</script>
