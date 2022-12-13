/*
 * @Author: fantiga
 * @Date: 2022-11-16 19:49:29
 * @LastEditTime: 2022-11-22 10:18:45
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /test-for-mp-frontend-FantiGA/react/webpack/rules.config.js
 */

/* eslint-disable @typescript-eslint/no-var-requires */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rulesConfig = [
  {
    // 'test' specifies the file in which the rule takes effect / 'test'指定的是规则生效的文件
    test: /\.js$/,
    // Loader to use / 要使用的loader
    use: ['babel-loader', 'source-map-loader'],
    // Files to exclude / 要排除的文件
    exclude: /node_modules/,
  },
  {
    test: /\.ts[x]?$/,
    use: [
      // Configure babel / 配置babel
      {
        // Specified loader / 指定加载器
        loader: 'babel-loader',
        // Set up babel / 设置babel
        options: {
          // Set up a predefined environment / 设置预定义的环境
          presets: [
            [
              // Plugins for specific environments / 指定环境的插件
              '@babel/preset-env',
              // Configuration information / 配置信息
              {
                // Compatible browser / 要兼容的浏览器
                targets: {
                  chrome: '88',
                },
                // Specify the version of corejs / 指定corejs的版本
                corejs: '3',
                // The way to use corejs, 'usage' means loading on demand / 使用corejs的方式，'usage'表示按需加载
                useBuiltIns: 'usage',
              },
            ],
          ],
        },
      },
      'ts-loader',
    ],
    exclude: /node_modules/,
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
    include: /\.module\.css$/,
  },
  // Set up sass file handling / 设置sass文件处理
  {
    test: /\.s[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      // Import postcss / 引入postcss
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  browsers: 'last 2 versions',
                },
              ],
            ],
          },
        },
      },
      // Compile Sass to CSS / 将 Sass 编译成 CSS
      'sass-loader',
    ],
  },
  {
    test: /\.(svg|png|jpg|gif)$/,
    type: 'asset/resource',
  },
];

module.exports = rulesConfig;
