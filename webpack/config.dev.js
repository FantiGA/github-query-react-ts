/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-12-13 21:15:44
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-github-ts/webpack/config.dev.js
 */

/** Merger rules / 合并规则 */
const { merge } = require('webpack-merge');

/** Error Prompt Plugin / 错误提示插件 */
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

/** Import basic configuration / 导入基础配置 */
const baseConfig = require('./config.base.js');

module.exports = merge(baseConfig, {
  /** Specify the packaging method: 'none' | 'development' | 'production' / 指定打包模式 */
  mode: 'development',
  /** In order to facilitate development and debugging, the source-map mode is enabled here. / 为了便于开发调试，这里开启source-map模式。 */
  devtool: 'source-map',
  plugins: [new FriendlyErrorsWebpackPlugin()],
});
