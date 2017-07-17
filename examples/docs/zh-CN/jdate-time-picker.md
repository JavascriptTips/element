## 时间控件
<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    data() {
      return {
        date:'',
        date2:'',
        maxDate: new Date(),

        date3Str:null,
        date4Str:null,
      };
    },
    computed:{
      date3(){
        return new Date(this.date3Str);
      },
      date4(){
        return !!this.date4Str ? new Date(this.date4Str) : null;
      },
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
  <el-input v-model="date" :auto-clear="true"></el-input>
</el-jdate-time-picker>
```
:::


###
:::demo input
```html
<el-jdate-time-picker v-model="date2" :time-picker="true">
  <input></input>
</el-jdate-time-picker>
```
:::

### 区间的选取
:::demo input
```html
<el-jdate-time-picker
  v-model="date3Str"
  :time-picker="true"
  :max-date-time="date4">
  <el-input></el-input>
</el-jdate-time-picker>
<el-jdate-time-picker
  v-model="date4Str"
  :time-picker="true"
  :min-date-time="date3">
  <el-input></el-input>
</el-jdate-time-picker>

```
:::



### Row Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| timePicker | 使用时间选择 | Boolean | — | false |
| value | 当前时间，YYYY-MM-DD格式 | string | － | '' |
