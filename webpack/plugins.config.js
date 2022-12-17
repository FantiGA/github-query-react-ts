/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-12-17 18:00:47
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/webpack/plugins.config.js
 */

const path = require('path');

/** Import HTML plugin / 引入HTML插件 */
const HTMLWebpackPlugin = require('html-webpack-plugin');

// const { SourceMapDevToolPlugin } = require('webpack')

/** CSS code packaging separation / CSS 代码打包分离 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsConfig = [
  new HTMLWebpackPlugin({
    // title: 'Item List',
    /** Configure the generated HTML file name / 配置生成的HTML文件名称 */
    // filename: './dist/index.html',
    /** Template files required to generate HTML files / 生成HTML文件所需要的模板文件 */
    template: path.resolve(__dirname, 'public', 'index.html'),
    minify: {
      /** Remove comments in HTML files after packaging / 打包后移除HTML文件中的注释 */
      removeComments: true,
    },
    /** Import ico file / 导入ico文件 */
    favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    /** Import the manifest file / 导入manifest文件 */
    // manifest: path.resolve(__dirname, 'public', 'manifest.json'),
  }),
  // new SourceMapDevToolPlugin({
  //     filename: '[file].map',
  // }),
  new MiniCssExtractPlugin({
    filename: '[name].[chunkhash:8].css',
  }),
];

module.exports = pluginsConfig;
