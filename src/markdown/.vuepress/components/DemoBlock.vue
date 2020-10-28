<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-19 17:23:14
 * @LastEditors: Sue
 * @LastEditTime: 2020-08-25 17:11:28
-->
<template>
  <div class="demo-block">
    <header>
      <h2>
        {{ bindValue.title }}
      </h2>
      <p class="desc">
        {{ bindValue.desc }}
      </p>
    </header>
    <DemoCard :online-run-link="bindValue.onlineRunLink">
      <slot />
      <template #codeDesc>
        <slot name="codeDesc" />
      </template>
      <template #code>
        <slot name="code" />
      </template>
    </DemoCard>
  </div>
</template>
<script>
import DemoCard from './DemoCard'
export default {
  components: { DemoCard },
  data () {
    return {};
  },
  computed: {
    bindValue () {
      return { ...this.$attrs, ...this.props }
    }
  }
};
</script>
<style lang="less" >
.demo-block {
  .desc {
    font-size: 14px;
    line-height: 1.5em;
    color: #5e6d82;
  }
}
</style>
