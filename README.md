<!--
 * @Author: fantiga
 * @Date: 2022-12-13 20:35:36
 * @LastEditTime: 2022-12-17 20:48:39
 * @LastEditors: fantiga
 * @FilePath: /github-query-react-ts/README.md
-->
# github-query-react-ts

- [English](README.md)
- [简体中文](README.zh-CN.md)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Welcome.

This is a demo of implementing GitHub repository search functionality with React and the GitHub REST API.

[Demo](https://fantiga.github.io/github-query-react-ts/dist/)

## Table of Contents

- [Architecture](#architecture)
- [Strategies](#strategies)
- [Maintainers](#maintainers)
- [License](#license)

## Architecture

 - The main Javascript framework is [React 18.2](https://reactjs.org/) version.
 - Use components such as `Box`, `TextField`, `Avatar`, `Link`, `DataGrid`, `Grid2` from [Material UI Component Library](https://mui.com/).
 - Simple package and use of [Axios Promise](https://axios-http.com/).
 - Asynchronous data requests and responses using the [GitHub REST API](https://docs.github.com/en/rest).
 - Use [Webpack 5.75.0](https://webpack.js.org/) for code and resource packaging.
 - It follows the type checking and syntax specifications of [Typescript](https://www.typescriptlang.org/) and [ESLint](https://eslint.org/).

## Strategies

 1. All projects are in the `/` directory.
 2. `/src/index.tsx` is an entry file.
 3. `/src/pages/Index.tsx` is a single page. 
 4. The `/src/components/` directory is the two components `Query` and `Result` in the page.
 5. The `Query` component is used to collect the `keyword` entered by the user.
 6. `Index.tsx` serves as a middleware to help `Query` pass `keyword` values to `Result`. Since it is just a simple demo project, no third-party state management library is used.
 7. After receiving the `keyword`, the `Result` component sends a request to the GitHub REST API through the specified URL `https://api.github.com/search/repositories`. Put the returned `items` into the `DataGrid` component. Calculate the total number of pages returned by `total_count` and put it into `rowCount`.
 8. The `onPageChange` and `onPageSizeChange` callback methods of the `DataGrid` itself can complete the server asynchronous request for page turning.
 9. Please be careful not to operate frequently, otherwise the API will return "403 Forbidden", resulting in a white screen on the page and a large number of errors in the console. Refresh the page after waiting for a few seconds, and it will return to normal.
 10. Cumulative time spent: about `15` hours.


## Maintainers

[@FantiGA](https://github.com/FantiGA)

## License

[MIT](LICENSE)  © 2023 [@FantiGA](https://github.com/FantiGA)
