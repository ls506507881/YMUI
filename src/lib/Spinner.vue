<template>
  <div class="ym-spinner spinner">
    <div :class="type"
         :style="pStyle">
      <div v-for="(item, index) in itemCount"
           :key="index"
           class="item"
           :style="{
          backgroundColor: type === 'spiral' ? '' : color,
          width: parseInt(baseNum) + 'px',
          height:
            (type === 'lines'
              ? parseInt(baseNum * 4)
              : type === 'ios'
              ? parseInt(baseNum * 3.5)
              : parseInt(baseNum)) + 'px',
          borderRadius: type === 'spiral' ? 0 : Math.ceil(baseNum) + 'px'
        }">
        <div v-if="type === 'spiral'"
             class="progress"
             :style="{
            width: parseInt(baseNum * 4) + 'px',
            height: parseInt(baseNum * 4) + 'px',
            border: parseInt(baseNum / 2) + 'px solid ' + color,
            borderTop: parseInt(baseNum / 2) + 'px solid transparent'
          }" />
      </div>
    </div>
  </div>
</template>
<script>
// type:dots,
// import { devPR } from 'ym-js-utils'

export default {
  name: 'Spinner',
  props: {
    type: {
      type: String,
      default: 'dots'
    },
    color: {
      type: String,
      default: '#555'
    },
    size: {
      type: [String, Number],
      default: 5
    }
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    itemCount () {
      switch (this.type) {
        case 'bubbles':
        case 'circles':
          return 8
        case 'lines':
          return 4
        case 'spiral':
          return 2
        case 'ios':
          return 12
        case 'dots':
        default:
          return 3
      }
    },
    baseNum () {
      let width = document.documentElement.offsetWidth || document.body.offsetWidth
      let r = width / 375
      // let r = devPR() || 1
      r = r < 1 ? 1 : r
      switch (this.type) {
        case 'bubbles':
        case 'circles':
          return (this.size * r) / 1.3
        case 'lines':
          return (this.size * r) / 2.8
        case 'spiral':
          return (this.size * r) / 1.3
        case 'ios':
          return (this.size * r) / 4.2
        // case 'dots':
        default:
          return this.size * r
      }
    },
    pStyle () {
      switch (this.type) {
        case 'bubbles':
        case 'circles':
          return {
            width: parseInt(this.baseNum * 4) + 'px',
            height: parseInt(this.baseNum * 4) + 'px',
            margin: parseInt((this.baseNum * 1.2) / 2) + 'px'
          }
        case 'spiral':
          return {
            width: parseInt(this.baseNum * 4) + 'px',
            height: parseInt(this.baseNum * 4) + 'px'
          }
        case 'ios':
          return {
            width: parseInt(this.baseNum * 4 * 3.5) + 'px',
            height: parseInt(this.baseNum * 4 * 3.5) + 'px'
          }
        case 'dots':
          return {
            width: parseInt(this.baseNum * 3 + 8) + 'px',
            height: parseInt(this.baseNum) + 'px'
          }
        case 'lines':
          return {
            width: parseInt(this.baseNum * 6 + (8 + this.baseNum / 8)) + 'px',
            height: parseInt(this.baseNum * 4 * 1.6) + 'px'
          }
        default:
          return {}
      }
    }
  }
}
</script>

<style lang="stylus">
$base-time = 0.16s
$bubble-time = 0.1s
$line-time = 0.05s
.ym-spinner
  display inline-block
  line-height 1
  *
    box-sizing border-box
  .dots
    position relative
    display flex
    justify-content space-between
    margin 5px 0
    .item
      position relative
      top 0
      border-radius 50%
      transform-origin center center
      animation dot 1.4s infinite ease-in-out both
    .item:nth-child(1)
      left 0
      animation-delay -0.32s
    .item:nth-child(2)
      // left 50%
      animation-delay -0.16s
    .item:nth-child(3)
      right 0
@keyframes dot
  0%
    opacity 0
    transform scale(0)
  40%
    opacity 1
    transform scale(1)
  80%
    opacity 0
    transform scale(0)
  100%
    opacity 0
    transform scale(0)
.ym-spinner
  .bubbles,
  .circles
    position relative
    border-radius 50%
    .item
      position absolute
      border-radius 50%
      opacity 0.5
      transform translate(-50%, -50%)
      transform-origin 0 0
    .item:nth-child(1)
      top 0
      left 50%
    .item:nth-child(2)
      top 15%
      left 85%
      // animation-delay 0.16s
      animation-delay $bubble-time
    .item:nth-child(3)
      top 50%
      left 100%
      // animation-delay 0.32s
      animation-delay $bubble-time * 2
    .item:nth-child(4)
      top 85%
      left 85%
      animation-delay $bubble-time * 3
    .item:nth-child(5)
      top 100%
      left 50%
      animation-delay $bubble-time * 4
    .item:nth-child(6)
      top 85%
      left 15%
      animation-delay $bubble-time * 5
    .item:nth-child(7)
      top 50%
      left 0
      animation-delay $bubble-time * 6
    .item:nth-child(8)
      top 15%
      left 15%
      animation-delay $bubble-time * 7
  .bubbles
    .item
      animation bubble ($bubble-time * 8) infinite ease-in-out both
  .circles
    .item
      animation circle ($bubble-time * 8) infinite ease-in-out both
@keyframes bubble
  0%
    opacity 0.5
    transform scale(0.2) translate(-50%, -50%)
  20%
    opacity 1
    transform scale(1.2) translate(-50%, -50%)
  // 50%
  // transform scale(1.2) translate(-50%, -50%)
  // opacity 1
  80%
    opacity 0.8
    transform scale(0.4) translate(-50%, -50%)
  100%
    opacity 0.5
    transform scale(0.2) translate(-50%, -50%)
@keyframes circle
  0%
    opacity 0.3
  20%
    opacity 1
  100%
    opacity 0.3
.ym-spinner
  .lines
    display flex
    justify-content space-between
    align-items center
    .item
      border-radius 50%
      animation line 0.85s infinite ease-in-out both
    .item:nth-child(2)
      animation-delay $base-time
    .item:nth-child(3)
      animation-delay $base-time * 2
    .item:nth-child(4)
      animation-delay $base-time * 3
    .item:nth-child(5)
      animation-delay $base-time * 4
@keyframes line
  0%
    opacity 0.5
    transform scaleY(0.6)
  40%
    opacity 1
    transform scaleY(1.6)
  60%
    opacity 1
    transform scaleY(1.6)
  100%
    opacity 0.5
    transform scaleY(0.6)
.ym-spinner
  .spiral
    position relative
    .item
      position absolute
      top 0
      overflow hidden
      width 50% !important
      height 100% !important
      .progress
        position absolute
        top 0
        border-radius 50%
        // border 20px solid green
        // border-top 20px solid transparent
        // transform rotate(45deg)
        animation spiral 0.8s infinite ease-in-out both
    .item:nth-child(1)
      left 0
    .item:nth-child(2)
      right 0
      .progress
        right 0
@keyframes spiral
  0%
    transform rotate(45deg)
  100%
    transform rotate(405deg)
.ym-spinner
  .ios
    position relative
    .item
      position absolute
      top 50%
      left 50%
      border-radius 50%
      opacity 0.5
      transform-origin 0 0
      animation circle ($line-time * 11) infinite ease-in-out both
    .item:nth-child(1)
      transform translate(-50%, -200%)
    .item:nth-child(2)
      transform rotate(30deg) translate(-50%, -200%)
      animation-delay $line-time
    .item:nth-child(3)
      transform rotate(60deg) translate(-50%, -200%)
      animation-delay $line-time * 2
    .item:nth-child(4)
      transform rotate(90deg) translate(-50%, -200%)
      animation-delay $line-time * 3
    .item:nth-child(5)
      transform rotate(120deg) translate(-50%, -200%)
      animation-delay $line-time * 4
    .item:nth-child(6)
      transform rotate(150deg) translate(-50%, -200%)
      animation-delay $line-time * 5
    .item:nth-child(7)
      transform rotate(180deg) translate(-50%, -200%)
      animation-delay $line-time * 6
    .item:nth-child(8)
      transform rotate(210deg) translate(-50%, -200%)
      animation-delay $line-time * 7
    .item:nth-child(9)
      transform rotate(240deg) translate(-50%, -200%)
      animation-delay $line-time * 8
    .item:nth-child(10)
      transform rotate(270deg) translate(-50%, -200%)
      animation-delay $line-time * 9
    .item:nth-child(11)
      transform rotate(300deg) translate(-50%, -200%)
      animation-delay $line-time * 10
    .item:nth-child(12)
      transform rotate(330deg) translate(-50%, -200%)
      animation-delay $line-time * 11
</style>
