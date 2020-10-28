<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-20 10:21:32
 * @LastEditors: Sue
 * @LastEditTime: 2020-09-28 09:39:02
-->
<template>
  <div class="page-home">
    <DemoScroll2 />
  </div>
</template>

<script>
import DemoScroll2 from './DemoScroll2.vue'
export default {
  name: 'pageScrollCeil',
  components: {
    DemoScroll2
  }
}
</script>
<style lang="stylus" scoped>
.demo-scroll
  position absolute
  top 0
  left 0
  width 100%
  height 100%
</style>
