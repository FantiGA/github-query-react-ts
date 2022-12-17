<!--
 * @Author: fantiga
 * @Date: 2022-12-17 19:40:36
 * @LastEditTime: 2022-12-17 20:48:46
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /github-query-react-ts/README.zh-CN.md
-->

# github-query-react-ts

- [English](README.md)
- [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

欢迎。

这是一个使用 React 和 GitHub REST API 实现 GitHub 存储库搜索功能的演示。

[演示](https://fantiga.github.io/github-query-react-ts/dist/)

## 目录

- [架构](#架构)
- [策略](#策略)
- [维护者](#维护者)
- [许可证](#许可证)

## 架构

  - 主要的 Javascript 框架是 [React 18.2](https://reactjs.org/) 版本。
  - 使用 [Material UI 组件库](https://mui.com/) 中的 `Box`、`TextField`、`Avatar`、`Link`、`DataGrid`、`Grid2` 等组件。
  - [Axios Promise](https://axios-http.com/)的简单封装和使用。
  - 使用 [GitHub REST API](https://docs.github.com/en/rest) 的异步数据请求和响应。
  - 使用 [Webpack 5.75.0](https://webpack.js.org/) 进行代码和资源打包。
  - 它遵循 `Typescript` 和 `ESLint` 的类型检查和语法规范。

## 策略

  1. 所有项目都在`/`目录下。
  2. `/src/index.tsx` 是入口文件。
  3. `/src/pages/Index.tsx` 是唯一页面。
  4. `/src/components/`目录下是页面中的`Query`和`Result`两个组件。
  5. `Query`组件用于收集用户输入的`keyword`。
  6. `Index.tsx` 作为中间件帮助 `Query` 将 `keyword` 值传递给 `Result`。 由于只是一个简单的demo工程，没有使用第三方状态管理库。
  7. 收到 `keyword` 后，`Result` 组件通过指定的 URL `https://api.github.com/search/repositories` 向 GitHub REST API 发送请求。 将返回的 `items` 放入 `DataGrid` 组件中。 计算 `total_count` 返回的总页数，并将其放入 `rowCount` 中。
  8. `DataGrid`自身的`onPageChange`和`onPageSizeChange`回调方法可以完成服务器异步请求翻页。
  9. 注意不要频繁操作，否则API会返回“403 Forbidden”，导致页面白屏，控制台大量报错。 等待几秒后刷新页面，即可恢复正常。
  10. 累计花费时间：约`15`小时。


## 维护者

[@FantiGA](https://github.com/FantiGA)

## 许可证

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
