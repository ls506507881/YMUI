<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-08-20 10:21:32
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 17:39:05
-->
<template>
  <div class="page">
    <panel-title title="Search"
                 @click.native="showSearch = !showSearch" />
    <collapse>
      <div class="wrap search-wrap"
           v-show="showSearch">
        <div class="wrap-main">
          <DemoSearch />
        </div>
      </div>
    </collapse>
    <panel-title title="Field"
                 @click.native="showField = !showField" />
    <collapse>
      <div class="wrap"
           v-show="showField">
        <DemoField />
      </div>
    </collapse>
    <panel-title title="FieldSearch"
                 @click.native="showFieldSearch = !showFieldSearch" />
    <collapse>
      <div class="wrap"
           v-show="showFieldSearch">
        <DemoFieldSearch />
      </div>
    </collapse>
    <panel-title title="Selector"
                 @click.native="showSelector = !showSelector" />
    <collapse>
      <div class="wrap"
           v-show="showSelector">
        <DemoSelector />
      </div>
    </collapse>
    <panel-title title="Picker"
                 @click.native="showPicker = !showPicker" />
    <collapse>
      <div class="wrap"
           v-show="showPicker">
        <DemoPicker />
      </div>
    </collapse>
    <panel-title title="DatePicker"
                 @click.native="showDatePicker = !showDatePicker" />
    <collapse>
      <div class="wrap"
           v-show="showDatePicker">
        <DemoDatePicker />
      </div>
    </collapse>
    <panel-title title="OptionIcon"
                 @click.native="showOptionIcon = !showOptionIcon" />
    <collapse>
      <div class="wrap"
           v-show="showOptionIcon"
           style="padding-bottom: 30px;">
        <DemoOptionIcon />
      </div>
    </collapse>
  </div>
</template>

<script>
import DemoSearch from './DemoSearch.vue'
import DemoField from './DemoField.vue'
import DemoFieldSearch from './DemoFieldSearch.vue'
import DemoSelector from './DemoSelector.vue'
import DemoPicker from './DemoPicker.vue'
import DemoDatePicker from './DemoDatePicker.vue'
import DemoOptionIcon from './DemoOptionIcon.vue'
export default {
  name: 'pageField',
  components: {
    DemoSearch,
    DemoField,
    DemoFieldSearch,
    DemoSelector,
    DemoPicker,
    DemoDatePicker,
    DemoOptionIcon
  },
  data () {
    return {
      showSearch: true,
      showField: true,
      showFieldSearch: false,
      showSelector: false,
      showPicker: false,
      showDatePicker: false,
      showOptionIcon: false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/styles/mixin'
.page
  // background-color #fff
  padding 0 15px 50px
  line-height 1.45
  .search-wrap.wrap
    background-color rgba(245, 245, 245, 1)
  .wrap
    padding 0 15px
    width 100%
    border-radius 4px
    background-color #fff
    box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.1)
    // border-radius 4px
    // .field-ipt-val
    // flexAlign()
    .wrap-main
      padding 15px 0
  .search
    // z-index 100
    /deep/ .options-wrap
      z-index 100
</style>
