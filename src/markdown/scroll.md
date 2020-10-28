<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:49:28
-->
<DemoBlock title="Scroll" desc="上拉加载">
   <DemoScroll1 />

<template slot="codeDesc">
固定顶部，实时监听滚动，获取滚动高度
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoScroll1Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Scroll" desc="吸顶">
   <DemoScroll2 />

<template slot="codeDesc">
固定顶部，滚动吸顶，获取吸顶状态
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoScroll2Code.vue

  </highlight-code>
</DemoBlock>

<DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/>
<DemoTable title="Slots" :tableBody="slotBody" :tableHead="slotHead"/>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `probeType | Number | 1,2,3 | - | 1:滚动的时候会派发scroll事件，会截流。2:滚动的时候实时派发scroll事件，不会截流。3:除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件`,
          `click | 点击列表是否派发click事件 | Boolean | - | true`,
          `scrollX | 是否开启横向滚动 | Boolean | - | false`,
          `listenScroll | 是否派发滚动事件 | Boolean | - | false`,
          `list | 列表的数据 | Array | - |  []`,
          `pullup | 是否派发滚动到底部的事件，用于上拉加载 | Boolean | - |  true`,
          `pulldown | 是否派发顶部下拉的事件，用于下拉刷新 | Boolean | - |  false`,
          `beforeScroll | 是否派发列表滚动开始的事件 | Boolean | - |  false`,
          `refreshDelay | 当数据更新后，刷新scroll的延时 | Number | - |  20`,
          `isLoading | 获取数据状态 | Boolean | - |  false`,
          `isEnd | 数据是否加载完毕 | Boolean | - |  false`,
          `useTransition | 是否使用css3 transition 动画 | Boolean | - |  false`,
          `noData | 无数据提示 | String | - |  暂无相关数据~`,
          `preventDefaultException | 禁止阻止默认事件的DOM标签名（大写） | Object | - |  {}`,
          `eventPassthrough | 某个方向保持原生滚动 | String | vertical,horizontal |  horizontal`,
          `isCeil | 是否吸顶 | Boolean | - |  -`,
        ],
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 滚动内容| -`,
          `head | 固定顶部| y:滚动距离`,
          `ceil | 滚动悬浮顶部（吸顶） | isFixed:是否已吸顶`,
          `scroll | 吸顶元素前面的元素（吸顶内容前滚动的元素） | -`,
          `foot | 固定底部 | -`,
        ],
      }
    },

  }
</script>
