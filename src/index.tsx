/**
 * @Author: fantiga
 * @Date: 2022-12-13 20:39:26
 * @LastEditTime: 2022-12-13 21:01:57
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-github-ts/src/index.tsx
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import Index from './pages/Index';

import './index.scss';

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
