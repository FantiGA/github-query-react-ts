/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-11-22 10:21:55
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /test-for-mp-frontend-FantiGA/react/webpack/plugins.config.js
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

// Import HTML plugin / 引入HTML插件
const HTMLWebpackPlugin = require('html-webpack-plugin');

// const { SourceMapDevToolPlugin } = require('webpack')

// css 代码打包分离
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsConfig = [
  new HTMLWebpackPlugin({
    // title: 'Item List',
    // filename: './dist/index.html', // Configure the generated HTML file name / 配置生成的HTML文件名称
    template: path.resolve(__dirname, '../public/index.html'), // Template files required to generate HTML files / 生成HTML文件所需要的模板文件
    minify: {
      removeComments: true, // Remove comments in HTML files after packaging / 打包后移除HTML文件中的注释
    },
    // Import ico file / 导入ico文件
    favicon: path.resolve(__dirname, '../public/favicon.ico'),
    // Import the manifest file / 导入manifest文件
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
