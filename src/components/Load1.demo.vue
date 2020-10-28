
<template>
  <!-- <transition> -->
  <div class="ym-load load"
       v-show="show"
       :class="type">
    <spinner :type="type"
             :size="size" />
  </div>
  <!-- </transition> -->
</template>

<script>
import Spinner from "../lib/Spinner.vue";

export default {
  name: 'Load',
  components: {
    Spinner
  },
  props: {
    show: Boolean,
    type: {
      type: String,
      default: 'lines'
    },
    size: {
      type: [String, Number],
      default: 10
    }
  }
}
</script>

<style lang="stylus">
.ym-load
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index 222
  background rgba(255, 255, 255, 1)
  .ym-spinner
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    svg
      position absolute
      top 50%
      left 50%
      width 40px
      height 40px
      transform translate(-50%, -50%)
</style>
