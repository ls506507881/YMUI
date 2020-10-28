<template>
  <card>
    <card-item @click.native="onLoad1">
      <div v-if="dc"
           v-load="load1"
           class="content">指令默认<br />bubbles</div>
    </card-item>
    <card-item @click.native="onLoad2">
      <!-- <div v-load:spiral="load2"
           class="content">指令<br />spiral</div> -->
      <div v-if="dc"
           v-load:spiral="load2"
           class="content">指令<br />spiral</div>
    </card-item>
    <card-item @click.native="onLoad3">
      <div class="content">组件<br />circles</div>
      <component v-if="dc"
                 :is="dc"
                 :show="load3"
                 type="circles" />
    </card-item>
    <card-item @click.native="onLoad4">
      <div class="content">组件<br />ios</div>
      <!-- <load :show="load4"
            type="ios" /> -->
      <component v-if="dc"
                 :is="dc"
                 :show="load4"
                 type="ios" />
    </card-item>
    <card-item @click.native="onShowLoad1">
      <div class="content">JS控制<br />lines</div>
    </card-item>
    <card-item @click.native="onShowLoad2">
      <div class="content">JS控制<br />dots</div>
    </card-item>
  </card>
</template>

<script>
import Load1Demo from "./Load1.demo.vue";
import Card from "./card.vue";
import CardItem from "./card-item.vue";
import Vue from 'vue'
export default {
  name: 'DemoLoad',
  components: {
    Card, CardItem, Load1Demo
  },
  data () {
    return {
      dc: null,
      load1: false,
      load2: false,
      load3: false,
      load4: false
    }
  },
  methods: {
    onLoad1 () {
      this.load1 = true
      setTimeout(() => {
        this.load1 = false
      }, 2000)
    },
    onLoad2 () {
      this.load2 = true
      setTimeout(() => {
        this.load2 = false
      }, 2000)
    },
    onLoad3 () {
      this.load3 = true
      setTimeout(() => {
        this.load3 = false
      }, 2000)
    },
    onLoad4 () {
      this.load4 = true
      setTimeout(() => {
        this.load4 = false
      }, 2000)
    },
    onShowLoad1 () {
      this.$_load.show()
      setTimeout(() => {
        this.$_load.hide()
      }, 2000)
    },
    onShowLoad2 () {
      this.$_load.show({ type: 'dots' })
      setTimeout(() => {
        this.$_load.hide()
      }, 2000)
    }
  }
  // mounted () {
  //   import('../../lib/load').then((m) => {
  //     Vue.use(m.default)
  //     this.dc = m.default
  //   })
  // }
}
</script>
<style lang="stylus" scoped>
.content
  text-align center
</style>
