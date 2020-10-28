<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-18 13:40:35
 * @LastEditors: Sue
 * @LastEditTime: 2020-09-27 17:31:24
-->
<template>
  <div class="page">
    <DemoNotFound />
  </div>
</template>
<script>
import DemoNotFound from './DemoNotFound.vue'
export default {
  name: 'pageNotFound',
  components: {
    DemoNotFound
  }
}
</script>
<style lang="stylus" scoped>
.demo-not-found
  height 100%
</style>
