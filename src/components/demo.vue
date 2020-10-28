<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode"
              v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode"
              v-else>查看代码</Button>
    </div>
    <div class="demo-code"
         v-if="codeVisible">
      <pre class="language-html"
           type="highlight-code"
           v-html="html" />
      </div>
</div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;
export default {
  components: {
    Button
  },
  props: {
    component: Object
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    const showCode = () => (codeVisible.value = true);
    const hideCode = () => (codeVisible.value = false);
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode
    };
  }
};
</script>

<style lang="stylus" scoped>
$border-color = #d9d9d9
.demo
  margin 16px 0 32px
  border 1px solid $border-color
  h2
    padding 8px 16px
    border-bottom 1px solid $border-color
    font-size 20px
  .demo-component
    padding 16px
  .demo-actions
    padding 8px 16px
    border-top 1px dashed $border-color
  .demo-code
    padding 8px 16px
    border-top 1px dashed $border-color
    pre
      margin 0
      font-family Consolas, 'Courier New', Courier, monospace
      line-height 1.1
</style>