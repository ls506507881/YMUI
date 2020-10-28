<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Card'
}
</script>
<style lang="stylus" scoped>
flexAlign($h = flex-start, $v = center)
  display flex
  justify-content $h
  align-items $v
.card
  flexAlign()
  flex-wrap wrap
  padding 10px 10px
</style>
