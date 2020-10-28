<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 15:54:03
-->
<DemoBlock title="NotFount" desc="404页面或其他">
   <DemoNotFound />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoNotFoundCode.vue

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
          `img | 显示的图片 | String | - | 默认图片`,
        ], 
      }
    },

  }
</script>
