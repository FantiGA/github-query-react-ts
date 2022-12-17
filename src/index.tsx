/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:39:26
 * @LastEditTime: 2022-12-17 20:53:17
 * @LastEditors: fantiga
 * @FilePath: /github-query-react-ts/src/index.tsx
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

import Index from './pages/Index';

import './index.scss';

/** Import the Roboto font designed for Material UI. / 导入为 Material UI 设计的 Roboto 字体。 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

/**
 * React 18
 */
const container: HTMLElement =
  document.getElementById('root') || document.createElement('div');
/** Create a root. / 创建一个root。 */
const root = createRoot(container);
/** Initial Render: Renders an element to the root. / 初始渲染：将一个元素渲染到root。 */
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
