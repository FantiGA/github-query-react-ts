/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-12-17 18:00:39
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/webpack/config.prod.js
 */

/** Merger rules / 合并规则 */
const { merge } = require('webpack-merge');

/** Introduce the clean plugin / 引入clean插件 */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** 压缩css文件 */
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

/** 导入基础配置 */
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  /** Specify the packaging method: 'none' | 'development' | 'production' / 指定打包模式 */
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new CssMinimizerWebpackPlugin()],
});
