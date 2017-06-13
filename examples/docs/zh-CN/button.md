<script>
  import { addClass } from 'element-ui/src/utils/dom';
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let thirdDemo = demos[2];
        addClass(thirdDemo, 'intro-block');
      });
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-row {
      margin-bottom: 10px;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }

      & + .el-button-group {
        margin-left: 10px;
      }
    }
  }

  .demo-box.demo-button .intro-block {
    padding: 0;
  }

  .demo-button .intro-block .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;
    }
  }

  .demo-button .intro-block .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-button .intro-block .wrapper {
    float: right;
    margin-right: 20px;
  }
  .block {
    margin-bottom: 10px;
  }
</style>

## Button 按钮
常用的操作按钮。

### 全局按钮

全局的按钮基本用法。

:::demo Button 组件4种状态：Normal，Hover，Pressed，Disabled 。

```html
<div class="block">
  <el-button>默认按钮</el-button>
  <el-button icon="information">默认按钮</el-button>
  <el-button plain="true">默认按钮</el-button>
  <el-button loading="true">默认按钮</el-button>
  <el-button size="large">默认大按钮</el-button>
  <el-button size="small">默认小按钮</el-button>
  <el-button size="mini">默认迷你按钮</el-button>
  <el-button active="true">默认按钮选中</el-button>
  <el-button :disabled="true">禁用按钮</el-button>
</div>
<div class="block">
  <el-button type="primary">主要按钮</el-button>
  <el-button type="primary" plain="true">主要按钮</el-button>
  <el-button type="primary" plain-light="true">主要按钮</el-button>
  <el-button type="primary" loading="true">主要按钮</el-button>
  <el-button type="primary" icon="information">主要按钮</el-button>
  <el-button type="primary" size="large">主要大按钮</el-button>
  <el-button type="primary" size="small">主要小按钮</el-button>
  <el-button type="primary" size="mini">主要迷你按钮</el-button>
  <el-button type="primary" active="true">主要按钮选中</el-button>
  <el-button type="primary" :disabled="true">禁用按钮</el-button>
</div>
<div class="block">
  <el-button type="success">成功按钮</el-button>
  <el-button type="success" plain="true">成功按钮</el-button>
  <el-button type="success" icon="information">成功按钮</el-button>
  <el-button type="success" size="large">成功大按钮</el-button>
  <el-button type="success" size="small">成功小按钮</el-button>
  <el-button type="success" size="mini">成功迷你按钮</el-button>
  <el-button type="success" active="true">成功按钮选中</el-button>
  <el-button type="success" :disabled="true">禁用按钮</el-button>
</div>
<div class="block">
  <el-button type="warning">警告按钮</el-button>
  <el-button type="warning" icon="information">警告按钮</el-button>
  <el-button type="warning" size="large">警告大按钮</el-button>
  <el-button type="warning" size="small">警告小按钮</el-button>
  <el-button type="warning" size="mini">警告迷你按钮</el-button>
  <el-button type="warning" active="true">警告按钮选中</el-button>
  <el-button type="warning" :disabled="true">禁用按钮</el-button>
</div>
<div class="block">
  <el-button type="danger">危险按钮</el-button>
  <el-button type="danger" icon="information">危险按钮</el-button>
  <el-button type="danger" size="large">危险大按钮</el-button>
  <el-button type="danger" size="small">危险小按钮</el-button>
  <el-button type="danger" size="mini">危险迷你按钮</el-button>
  <el-button type="danger" active="true">危险按钮选中</el-button>
  <el-button type="danger" :disabled="true">禁用按钮</el-button>
</div>
<div class="block">
  <el-button type="info">信息按钮</el-button>
  <el-button type="info" icon="information">信息按钮</el-button>
  <el-button type="info" size="large">信息大按钮</el-button>
  <el-button type="info" size="small">信息小按钮</el-button>
  <el-button type="info" size="mini">信息迷你按钮</el-button>
  <el-button type="info" active="true">信息按钮选中</el-button>
  <el-button type="info" :disabled="true">禁用按钮</el-button>
</div>

```
:::

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```html
<el-button>默认按钮</el-button>
<el-button :plain="true">plain按钮</el-button>
<el-button :plain-light="true">亮边按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<el-button :plain="true" :disabled="true">主要按钮</el-button>
<el-button :plain-light="true" :disabled="true">亮边按钮</el-button>
<el-button type="primary" :disabled="true">主要按钮</el-button>
<el-button type="text" :disabled="true">文字按钮</el-button>
```
:::

### 有颜色倾向

不同的颜色倾向代表不同的提示

:::demo 朴素按钮同样设置了不同的`type`属性对应的样式（可选值同上），默认为`info`。设置`plain`属性，它接受一个`Boolean`。注意，在该情况下，`type`虽然可以为`text`，但是是没有意义的，会显示为`text button`的样式。

```html
<div class="block">
  <span class="demonstration">默认显示颜色</span>
  <span class="wrapper">
    <el-button type="success">成功按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="red">红色按钮</el-button>
  </span>
</div>
<div class="block">
  <span class="demonstration">hover 显示颜色</span>
  <span class="wrapper">
    <el-button :plain="true" type="success">成功按钮</el-button>
    <el-button :plain="true" type="warning">警告按钮</el-button>
    <el-button :plain="true" type="danger">危险按钮</el-button>
    <el-button :plain="true" type="info">信息按钮</el-button>
    <el-button :plain="true" type="red">红色按钮</el-button>
  </span>
</div>
```
:::

### 图标按钮

带图标的按钮可增强辨识度(有文字)或节省空间(无文字)。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="share"></el-button>
<el-button type="primary" icon="delete"></el-button>
<el-button type="primary" icon="search">搜索</el-button>
<el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
```
:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<el-button-group>`标签来嵌套你的按钮。

```html
<el-button-group>
  <el-button type="primary" icon="arrow-left">上一页</el-button>
  <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<el-button type="primary" :loading="true">加载中</el-button>
```
:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<el-button type="primary" size="large">大型按钮</el-button>
<el-button type="primary">正常按钮</el-button>
<el-button type="primary" size="small">小型按钮</el-button>
<el-button type="primary" size="mini">超小按钮</el-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| active |    是否使按钮高亮      |    Boolean       |   true/false    |   -  |
| size     | 尺寸   | string  |   large,small,mini            |    —     |
| type     | 类型   | string    |   primary,success,warning,danger,info,text,red |     —    |
| plain     | 是否朴素按钮   | Boolean    | — | false   |
| loading     | 是否加载中状态   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button,submit,reset | button |
