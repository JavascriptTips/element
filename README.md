# 通用组件库


## Quick Start
``` javascript
import Vue from 'vue'
import Element from 'element-ui'

Vue.use(Element)

// or
import {
  Select,
  Button
  // ...
} from 'element-ui'

Vue.component(Select.name, Select)
Vue.component(Button.name, Button)
```

## 上传库

先安装一个cnpm用于注册和登陆

> npm i -g cnpm

> cnpm set registry http://120.27.130.189:7001/

> cnpm login

login完成后,执行即可上传

> npm run dist //先打包，记得升级一下小版本号(patch)
> cnpm publish
