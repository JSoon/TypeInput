<h1>输入数据类型控制工具模块</h1>

用于表单输入控件中, 对输入文本进行类型限制, 目前实现的类型有:

- 文本输入
- 整数输入
- 小数输入

## 单元测试

1. `npm install`
2. `npm run test`
3. 访问 `http://localhost:8080/test.html`

## 使用方法

1. 安装模块
```
npm i @financial-freedom/typeinput
```
2. 导入模块
```js
// 整体导入
import * as typeinput from '@financial-freedom/typeinput';
import {
  text,
  integer,
  decimal,
} from '@financial-freedom/typeinput';

// 单独导入
import text from '@financial-freedom/typeinput/src/types/text';
import integer from '@financial-freedom/typeinput/src/types/integer';
import decimal from '@financial-freedom/typeinput/src/types/decimal';
```

## 文档

请查看源码 JSDoc 注释.

## 浏览器兼容性

```
defaults
> 5% in CN
last 2 versions
ie >= 10
```