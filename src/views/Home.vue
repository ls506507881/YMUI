<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-20 10:21:32
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 16:52:02
-->
<template>
  <div class="page home">
    <!-- <panel-title title="基础" /> -->
    <ul>
      <li class="link-item" v-for="(item, index) in links" :key="index">
        <panel-title :title="item.name" no-line border-b :link="item.link" />
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      links: [
        {
          name: 'Spinner',
          link: '/spinner'
        },
        {
          name: 'Load',
          link: '/load'
        },
        {
          name: 'SvgIcon',
          link: '/svg-icon'
        },
        {
          name: 'Field',
          link: '/field'
        },
        {
          name: 'Scroll',
          link: '/scroll'
        },
        {
          name: 'ScrollCeil【吸顶】',
          link: '/scroll-ceil'
        },
        {
          name: 'Tab',
          link: '/tab'
        },
        {
          name: 'Img（ym-img）',
          link: '/img'
        },
        {
          name: 'Video（ym-video）',
          link: '/video'
        },
        {
          name: 'Message',
          link: '/message'
        },
        {
          name: 'FloatBtn',
          link: '/float-btn'
        },
        {
          name: 'NotFound',
          link: '/not-found'
        },
        {
          name: 'PanelTitle、Collapse',
          link: '/panel-title'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  padding-left 15px
  background-color #fff
.link-item
  /deep/ .panel-title .title
    font-weight bold
    font-size 14px
</style>
