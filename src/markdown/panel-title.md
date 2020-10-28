<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 17:49:29
-->
<DemoBlock title="PanelTitle | Collapse" desc="panel-title | 折叠面板">
   <DemoPanelTitle />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoPanelTitleCode.vue

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
          `title | 标题 | String | - | -`,
          `noLine | 左边色条 | Boolean | - | -`,
          `borderB | 底部边框 | Boolean | - | -`,
          `link | 跳转地址、路由 | String,Object | - | -`,
          `icon | 右侧icon | String | - | -`,
        ],
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 与标题同层 | -`,
          `icon | 左侧icon | -`,
          `right | 右侧icon | -`,
        ],
      }
    },

  }
</script>
