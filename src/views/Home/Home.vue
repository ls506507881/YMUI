<template>
  <div class="home_container">
    <Ripple></Ripple>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>YUMI</h1>
        <h2>悦米公用组件库</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>悦米常用组件封装</h3>
          <p>根据悦米以往项目，抽离常用的组件。</p>
        </li>
      </ul>
    </div>
    <div class="copyright">li_shuai | Copyright © 2020 present yuemia</div>
  </div>
</template>
<script lang="ts">
import Topnav from "../../components/Topnav.vue";
import Ripple from "./components/Ripple.vue";

export default {
  components: { Topnav, Ripple }
};
</script>
<style lang="stylus" scoped>
$green = #02bcb0
$border-radius = 4px
$color = #007974
.home_container
  display flex
  flex-direction column
  min-height 100vh
  .topnavAndBanner
    // border-bottom 1px solid red
    // background linear-gradient(
    // 145deg,
    // rgba(227, 255, 253, 1) 0%,
    // rgba(183, 233, 230, 1) 100%
    // )
    clip-path ellipse(80% 60% at 50% 40%)
  .features
    flex-grow 1
    margin 64px auto
    width 400px
    @media (max-width: 800px)
      ul
        padding 10px 0 10px 30px
        border-radius 5px
        background rgba(255, 255, 255, 0.8)
    @media (min-width: 800px)
      width 800px
      ul
        padding 10px 0 10px 30px
        border-radius 5px
        background rgba(255, 255, 255, 0.8)
        li
          width 50%
    @media (min-width: 1200px)
      width 1200px
      ul
        padding-right 33.3333%
        background transparent
        li
          width 50%
    ul
      display flex
      flex-wrap wrap
      li
        display grid
        justify-content start
        align-content space-between
        margin 16px 0
        grid-template-areas 'icon title' 'icon text'
        grid-template-columns 80px auto
        grid-template-rows 1fr auto
        svg
          width 64px
          height 64px
          grid-area icon
        h3
          font-size 28px
          grid-area title
        p
          grid-area text
  .copyright
    padding-bottom 20px
    text-align center
  .banner
    display flex
    flex-direction column
    justify-content center
    align-items center
    padding 100px 0
    color $color
    .actions
      padding 8px 0
      a
        display inline-block
        margin 0 8px
        padding 8px 24px
        border-radius $border-radius
        background $green
        color white
        &:hover
          text-decoration none
</style>