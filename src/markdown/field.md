<!--
 * @Description: 无
 * @Author: Sue
 * @Date: 2020-09-22 14:26:18
 * @LastEditors: Sue
 * @LastEditTime: 2020-10-13 16:07:52
-->
<DemoBlock title="Field" desc="field">
   <DemoField />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoFieldCode.vue

  </highlight-code>
</DemoBlock>

<DemoBlock title="FieldSearch" desc="field-search">
   <DemoFieldSearch />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoFieldSearchCode.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Selector" desc="selector">
   <DemoSelector />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoSelectorCode.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="Picker" desc="picker">
   <DemoPicker />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoPickerCode.vue

  </highlight-code>
</DemoBlock>
<DemoBlock title="DatePicker" desc="date-picker">
   <DemoDatePicker />

  <highlight-code slot="code" lang="vue">

<<< @/examples/components/DemoDatePickerCode.vue

  </highlight-code>
</DemoBlock>

<DemoTable title="基础参数(Cell)" :tableBody="tableBody" :tableHead="tableHead"/>
<DemoTable title="Field" :tableBody="field" :tableHead="tableHead"/>
<DemoTable title="FieldSearch" :tableBody="fieldSearch" :tableHead="tableHead"/>
<DemoTable title="Selector" :tableBody="selector" :tableHead="tableHead"/>
<DemoTable title="Picker" :tableBody="picker" :tableHead="tableHead"/>
<DemoTable title="DatePicker" :tableBody="datePicker" :tableHead="tableHead"/>
<DemoTable title="FieldSlots" :tableBody="slotBody" :tableHead="slotHead"/>
<script>
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `label | label | String | - | -`,
          `labelStyle | label样式 | Object | - | -`,
          `required | 是否必填 | Boolean | - | false`,
          `noIcon | 隐藏必填icon | Boolean | - | false`,
          `inline | 同行显示 | Boolean | - | true`,
          `align | 内容对齐方式 | String | left,center,right | -`,
          `verticalAlign | 同行内上下对齐方式 | String | top,middle | middle`,
          `desc | 描述 | String | - | -`,
          `noBorder | 底部边框 | Boolean | - | -`,
          `wrapBorder | 输入框底部边框 | Boolean | - | -`,
        ],
          field: [
          `value/v-model | value | String,Number | - | -`,
          `type | 输入框类型 | String | input的type值 | text`,
          `placeholder | placeholder | String | - | -`,
          `maxlength | 最大长度 | Number | - | -`,
          `max | 最大数值 | Number | - | -`,
          `min | 最小数值 | Number | - | -`,
          `verify | 输入内容检测函数 | Function | - | null`,
          `disabled | 是否禁用 | Boolean | - | false`,
          `readOnly | 不可输入(选择器等) | Boolean | - | -`,
          `available | 允许输入的特殊符号 | String,Array | - | 空格,@,.,-,/,(,),（,）`,
          `allowSymbol | 不检测特殊符号 | Boolean | - | -`,
          `rows | 文本域默认行数 | Number | - | 1`,
          `hideIcon | 隐藏输入框后的icon（清除、警告） | Boolean | - | -`,
          `autosize | 文本域自动高度 | Boolean | - | true`,
        ],
          fieldSearch: [
          `value/v-model | value | String,Number | - | -`,
          `placeholder | placeholder | String | - | -`,
          `maxlength | 最大长度 | Number | - | -`,
          `disabled | 是否禁用 | Boolean | - | false`,
          `hideIcon | 隐藏输入框后的icon（清除、警告） | Boolean | - | -`,
          `options | 列表 | Array | - | -`,
          `labelKey | label属性名 | String | - | label`,
          `valueKey | value属性名 | String | - | value`,
          `loading | 搜索状态 | Boolean | - | -`,
          `isInput | 是否允许用户自行输入 | Boolean | - | -`,
          `isEnter | 是否启用回车后搜索 | Boolean | - | -`,
        ],
        selector: [
          `value/v-model | value | String,Number | - | -`,
          `placeholder | placeholder | String | - | -`,
          `disabled | 是否禁用 | Boolean | - | false`,
          `options | 列表 | Array,Object | - | -`,
          `labelKey | label属性名 | String | - | label`,
          `valueKey | value属性名 | String | - | value`,
          `icon | 右侧svg icon | String | - | ym_field_arrow`,
          `otherSeparator | 选择内容与输入内容分隔符 | String | - | /`,
        ],
        picker: [
          `value/v-model | value | String,Number | - | -`,
          `placeholder | placeholder | String | - | -`,
          `type | 选择器类型 | String | area | -`,
          `disabled | 是否禁用 | Boolean | - | false`,
          `options | 列表 | Array,Object | - | -`,
          `column | 列数 | Number | - | -`,
          `labelKey | label属性名 | String | - | label`,
          `valueKey | value属性名 | String | - | value`,
          `icon | 右侧svg icon | String | - | ym_field_arrow`,
          `separator | 分隔符 | String | - | 空格`,
          `otherSeparator | 分隔符 | String | - | /`,
        ],
        datePicker: [
          `value/v-model | value | String,Number | - | -`,
          `placeholder | placeholder | String | - | -`,
          `disabled | 是否禁用 | Boolean | - | false`,
          `options | 列表 | Array,Object | - | -`,
          `type | 列表类型 | String | date,time,year-month,month-day,datehour | date`,
          `prop | 时间间隔 | Object | - | -({minute:10})`,
          `column | 列表 | Array,Object | - | -`,
          `icon | 右侧svg icon | String | - | ym_field_arrow`,
          `minDate | 最小日期 | String | - | 1950-1-1`,
          `maxDate | 最大日期 | String | - | now + 10Y`,
          `valueFormat | 格式化日期 | String | - | yyyy/MM/dd`,
          `format | 格式化显示日期 | String | - | -`,
          `separator | 选择内容与输入内容分隔符 | String | - | 空格`,
          `otherSeparator | 选择内容与输入内容分隔符 | String | - | /`,
        ],     
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        slotHead: `插槽名 | 说明 | 参数 `,
        //表格数据为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        slotBody: [
          `默认插槽(default) | 组件底部| -`,
          `right | 输入框右侧 | -`,
        ],
      
      }
    },

} </script>
