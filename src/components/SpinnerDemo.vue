<template>
  <div>
    <h1>Spinner 组件示例 </h1>
    <Demo :component="Spinner1Demo" />
    <TableDemo title="参数"
               :tableBody="tableBody"
               :tableHead="tableHead" />
  </div>
</template>
<script lang="ts">
import Spinner1Demo from "./Spinner1.demo.vue";
import TableDemo from "./TabsDemo.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";

export default {
  components: { Demo, TableDemo },
  setup() {
    const tableHead = `参数 | 说明 | 类型 | 可选值 | 默认值`;
    //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
    const tableBody = [
      `type | 类型 | String | - | dots`,
      `color | 颜色 | String | - | #555`,
      `size | 大小 | Number | - | 5`
    ];
    return { Spinner1Demo, tableHead, tableBody };
  }
};
</script>
<style lang="stylus" scoped>
$border-color = #d9d9d9
.demo
  margin 16px 0 32px
  border 1px solid $border-color
  h2
    padding 8px 16px
    border-bottom 1px solid $border-color
    font-size 20px
  .demo-component
    padding 16px
  .demo-actions
    padding 8px 16px
    border-top 1px dashed $border-color
  .demo-code
    padding 8px 16px
    border-top 1px dashed $border-color
    pre
      margin 0
      font-family Consolas, 'Courier New', Courier, monospace
      line-height 1.1
</style>