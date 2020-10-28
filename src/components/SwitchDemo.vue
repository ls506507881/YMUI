<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>
<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from "./Demo.vue";
import { ref } from "vue";

export default {
  components: { Demo },
  setup() {
    return { Switch1Demo, Switch2Demo };
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