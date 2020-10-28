<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-20 10:21:32
 * @LastEditors: Sue
 * @LastEditTime: 2020-09-27 16:51:34
-->
<template>
  <div class="page">
    <DemoMessage />
  </div>
</template>

<script>
import DemoMessage from './DemoMessage.vue'

export default {
  name: 'pageMessage',
  components: {
    DemoMessage
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onShow () {
      this.$_alert({
        title: 'Title',
        content: 'Content'
      }).then(({ type, vm }) => {
        console.log(type, vm)
      })
    },
    onShow1 () {
      this.$_confirm({
        title: 'Title',
        content: 'Content',
        onConfirm: (vm) => {
          console.log('confirm')
          return '1'
        }
      }).then(({ type, vm }) => {
        console.log(type, vm)
      })
    },
    onConfirm () {
      this.show = false
      console.log('close')
    }
  }
}
</script>
<style lang="stylus" scoped></style>
