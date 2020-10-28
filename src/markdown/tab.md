<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 15:58:44
-->
<DemoBlock title="Tab" desc="默认">
   <DemoTab1 />

<template slot="codeDesc">
默认Tab，左对齐
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab1Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Tab" desc="两端留白对齐">
   <DemoTab2 />

<template slot="codeDesc">
对齐方式：space-around，当元素宽度大于父级容器，会自动滚动<br>
底部边框：no-border 为 false，显示底部边框
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab2Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Tab" desc="滚动">
   <DemoTab3 />

<template slot="codeDesc">
内容超出自动滚动
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab3Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Tab" desc="自定义滚动条">
   <DemoTab4 />

<template slot="codeDesc">
通过插槽 bar 自定义滚动条<br>
auto-bar-width 滚动条宽度自适应元素宽度<br>
add-width 可以增加滚动条宽度
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab4Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Tab" desc="自定义元素">
   <DemoTab5 />

<template slot="codeDesc">
通过默认插槽可以自定义元素DOM，插槽抛出 label 和 active 两个参数
</template>

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab5Code.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Tab" desc="自定义元素，超出滚动">
   <DemoTab6 />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoTab6Code.vue

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
          `value/v-model | value | Number,String | - | -`,
          `list | 列表 | Array,Object | - | -`,
          `disabled | 是否可操作 | Boolean | - | -`,
          `props | 字段名定义 | Object | - | {value:'id',
                                            label:'label'}`,
          `noBorder | 底部边框 | Boolean | - |  true`,
          `direction | 对齐方式 | String | justify-content值 |  flex-start`,
          `noBar | 是否显示滚动条 | Boolean | - |  -`,
          `autoBarWidth | 滚动条宽度自适应 | Boolean | - |  -`,
          `width | 滚动条宽度 | Number | - |  30`,
          `addWidth | 滚动条加宽 | Number | - |  0`,
        ],     
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | Tab标签自定义 | label,active`,
          `bar | 底部滚动条| -`,
        ],
      }
    },

  }
</script>
