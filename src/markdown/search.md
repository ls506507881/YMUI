<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-14 19:06:11
-->
<DemoBlock title="Search" desc="search">
   <DemoSearch />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoSearchCode.vue

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
          `value/v-model | 关键字 | String | - | -`,
          `isSearch | 是否搜索框 | Boolean | - | -`,
          `allowEmpty | 搜索是否可为空 | Boolean | - | -`,
          `placeholder | placeholder | String | - | 请输入搜索关键词`,
          `btnTxt | 搜索按钮文本 | String | - | -`,
          `icon | 搜索icon | String | - | ym_icon_search`,
          `historyKey | 本地存储历史记录属性名 | String | - | search_history`,
          `isHistory | 是否有历史记录 | Boolean | - | -`,
        ],
      }
    },

  }
</script>
