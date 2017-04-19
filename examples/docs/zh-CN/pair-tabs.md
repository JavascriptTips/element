<script>
export default {

  data(){
    return {

      tabs:['国内XX这里','国际XX这里']
    }
  }
}
</script>
<style>
.st-tab1,.st-tab2{
  background-color: #ccc;
  height: 400px;
}
</style>

## 双标签切换

### 基础用法

:::demo 标题的tabs数量对应slot里的div数量

```html
  <template id="">

    <el-pair-tabs
      :tabs="tabs" >

      <div class="st-tab1">
        北京 <br>
        上海 <br>
        杭州 <br>
      </div>
      <div class="st-tab1">
        纽约 <br>
        东京 <br>
        悉尼 <br>
      </div>
    </el-pair-tabs>

  </template>

  <script>

    export default {
      data(){

        return {
          tabs:['国内','国际']
        }
      }
    }

  </script>

```
:::


### Switching-tabs Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| tabs     |  tab的标题，必填   | Array    |       —        |      -   |

### Switching-tabs Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 切换标签时候 |  对象 { tab的标题名, tab的下标 } |
