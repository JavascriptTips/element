## 时间控件
<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    data() {
      return {
        date:'',
        date2:'',
        maxDate: new Date()
      };
    },
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
      });
    }
  }
</script>




### el-input选取
:::demo input
```html
<el-jdate-time-picker v-model="date" :max-date="maxDate">
  <el-input v-model="date" ></el-input>
</el-jdate-time-picker>
```
:::


###
:::demo input
```html
<el-jdate-time-picker v-model="date2" :time-picker="true">
  <input  ></el-input>
</el-jdate-time-picker>
```
:::


### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timePicker | 使用时间选择 | Boolean | — | false |
| value | 当前时间，YYYY-MM-DD格式 | string | － | '' |
