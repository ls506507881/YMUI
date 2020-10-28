<template>
  <div class="topnav">
    <router-link to="/"
                 class="logo">
      YUMI
      <!-- <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg> -->
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible"
         class="toggleAside"
         @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  }
};
</script>
<style lang="stylus" scoped>
$color = #007974
.topnav
  position relative
  position fixed
  top 0
  left 0
  z-index 20
  display flex
  justify-content center
  align-items center
  padding 16px
  width 100%
  color $color
  .logo
    margin-right auto
    max-width 6em
  svg
    width 32px
    height 32px
  .menu
    display flex
    flex-wrap nowrap
    white-space nowrap
    li
      margin 0 1em
  .toggleAside
    position absolute
    top 50%
    left 16px
    display none
    width 32px
    height 32px
    background fade-out(black, 0.9)
    transform translateY(-50%)
  @media (max-width: 500px)
    .menu
      display none
    .logo
      margin 0 auto
    .toggleAside
      display inline-block
</style>