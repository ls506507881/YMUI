<template>
  <div class="card-item"
       :style="{
      width: width
    }">
    <div class="card-item-wrap">
      <div class="card-wrap"
           :style="{
          'padding-bottom': height
        }">
        <div class="card-wrap-position">
          <slot></slot>
        </div>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="tip">
        <slot name="tip"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardItem',
  props: {
    width: {
      type: String,
      default: '20%'
    },
    height: {
      type: String,
      default: '100%'
    }
  }
}
</script>
<style lang="stylus" scoped>
translateEl($left = 0, $top = 0)
  transform translate($left, $top)
positionTL($top = 0, $left = 0, $tl = 0, $tt = 0)
  translateEl($tl, $tt)
  position absolute
  top $top
  left $left
flexColAlign($h = flex-start, $v = flex-start)
  display flex
  flex-direction column
  justify-content $v
  align-items $h
.card-item
  padding 10px
  .card-item-wrap
    padding 15px 15px 10px
    border-radius 4px
    background-color #fff
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
  .card-wrap
    position relative
    width 100%
    height 0
  .card-wrap-position
    positionTL()
    flexColAlign(center, center)
    width 100%
    height 100%
    color $color-font-l
  .tip
    // positionBL(8px)
    width 100%
    color #999
    text-align center
    & *
      color #999
      user-select all
</style>
