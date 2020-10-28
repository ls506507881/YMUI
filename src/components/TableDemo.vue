<template>
  <div class="demo-wrap">
    <h3>{{title}}</h3>
    <table>
      <tr>
        <th v-for="(item,index) of tableHeader"
            :key="index">{{item}}</th>
      </tr>
      <tr v-for="(item,index) of tableData"
          :key="index">
        <td v-for="(it,idx) of item"
            :key="idx">{{item[idx]}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tableBody: Array,
    tableHead: String
  },
  computed: {
    tableHeader () {
      return this.tableHead.split('|').map((s) => s.replace(/^\s*|\s*$/g, ''))
    },
    tableData () {
      return this.tableBody.map((str) => {
        let data = {}
        str.split('|').map((s, i) => (data[i] = s.replace(/^\s*|\s*$/g, '')))
        return data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.demo-wrap
  padding 40px 0
  h3
    font-weight 600
    font-size 1.35rem
    line-height 1.25
    margin-block-start 1em
    margin-block-end 1em
    margin-inline-start 0px
    margin-inline-end 0px
  &:first-child
    margin-top 80px
  &:last-child
    margin-bottom 80px
  table
    margin 0
    width 100%
    border-collapse collapse
    text-align center
    tr
      border-top 1px solid #dfe2e5
      &:nth-child(2n)
        background-color #f6f8fa
  th,
  td,
  th
    padding 0.6em 1em
    border none
</style>
