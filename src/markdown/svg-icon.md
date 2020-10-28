<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-15 13:57:38
-->
<DemoBlock title="SvgIcon" desc="svg-icon">
   <DemoSvgIcon />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoSvgIconCode.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="非内置svg" desc="公用svg中没有需要的svg-icon">
  自定义方法引入svg-icon
  <highlight-code slot="code" lang="vue">
  <script>
  //  组件
  <svg-icon name="getIcon('collect')"/>
  // 方法
  export default {
    method: getIcon(name){
      require('svg路径')
      return name
    }
  }

  </script>
  </highlight-code>
</DemoBlock>

<DemoTable title="参数" :tableBody="tableBody" :tableHead="tableHead"/>

<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `name | icon名 | String | - | -`,
          `color | 填充颜色 | String | - | -`,
          `stroke | 描边颜色 | String | - | -`,
          `svgClass | icon类名 | String | - | -`
        ],
      }
    }
  }
</script>
