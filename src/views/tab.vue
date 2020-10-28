<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-20 10:21:32
 * @LastEditors: Sue
 * @LastEditTime: 2020-09-25 13:04:04
-->
<template>
  <div class="page">
    <card>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab1 />
        </template>
        <template #tip>
          默认
        </template>
      </card-item>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab2 />
        </template>

        <template #tip>
          no-border: false<br />
          dirction: space-around
        </template>
      </card-item>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab3 />
        </template>
        <template #tip>超出滚动</template>
      </card-item>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab4 />
        </template>
        <template #tip>自定义滚动条（超出滚动）</template>
      </card-item>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab5 />
        </template>
        <template #tip>自定义tab-item元素</template>
      </card-item>
      <card-item width="100%"
                 height="0">
        <template #main>
          <DemoTab6 />
        </template>
        <template #tip>自定义tab-item元素（超出滚动）</template>
      </card-item>
    </card>
  </div>
</template>

<script>
import DemoTab1 from './DemoTab1.vue'
import DemoTab2 from './DemoTab2.vue'
import DemoTab3 from './DemoTab3.vue'
import DemoTab4 from './DemoTab4.vue'
import DemoTab5 from './DemoTab5.vue'
import DemoTab6 from './DemoTab6.vue'
export default {
  name: 'pageTab',
  components: {
    DemoTab1,
    DemoTab2,
    DemoTab3,
    DemoTab4,
    DemoTab5,
    DemoTab6
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
/deep/ .card-item .card-item-wrap
  padding-top 0
  padding-right 0
  padding-left 0
.ym-tab
  margin-bottom 15px
.diy-b
  box-sizing border-box
  padding 0 30px
  height 40px
  border 1px solid rgba(255, 0, 0, 0.2)
  border-radius 5px
  color rgba(255, 0, 0, 0.5)
  line-height 40px
  &.active
    border none
    background-color rgba(255, 0, 0, 0.4)
    color #fff
</style>
