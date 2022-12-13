/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-11-22 10:24:15
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /test-for-mp-frontend-FantiGA/react/webpack/config.base.js
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const rulesConfig = require('./rules.config.js');
const pluginsConfig = require('./plugins.config.js');

const baseConfig = {
  // Specify the entry file / 指定入口文件
  entry: path.resolve(__dirname, '../src/index.tsx'),
  // Specify the directory where the package file is located / 指定打包文件所在目录
  output: {
    // Specify the directory of the package file / 指定打包文件的目录
    path: path.resolve(__dirname, '../dist'),
    // Packaged file name / 打包后的文件名
    filename: '[name].bundle.js',
    environment: {
      // Not using arrow functions / 不使用箭头函数
      // arrowFunction: false,
      // Do not use const (for compatibility with IE10) / 不使用const（为了兼容IE10）
      // const: false,
    },
    publicPath: '/',
  },
  // Specify the modules to be used when webpack packs / 指定webpack打包时要用的模块
  module: {
    // Specifies the rules to load / 指定要加载的规则
    rules: [...rulesConfig],
  },
  // Set which files can be used to reference modules / 设置哪些文件可以用于引用模块
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx', '.webpack.js', '.web.js'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@scss': path.resolve(__dirname, '../src/scss'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    },
  },
  // Configure the webpack plugin / 配置webpack插件
  plugins: [...pluginsConfig],
  // Performance Tips / 性能提示
  performance: {
    // Turn on/off hints / 打开/关闭提示
    hints: false,
    // When to emit a performance hint based on the maximum entry point size in bytes / 何时根据最大入口点大小（以字节为单位）发出性能提示
    maxEntrypointSize: 512000,
    // When to issue performance hints based on individual asset size in bytes / 何时根据单个资产大小（以字节为单位）发出性能提示
    maxAssetSize: 512000,
  },
};

module.exports = baseConfig;
