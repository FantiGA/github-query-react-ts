/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:57:05
 * @LastEditTime: 2022-12-16 22:29:32
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/utils/common.tsx
 */

const jsonToUrlParam = (json: string) =>
  encodeURIComponent(new URLSearchParams(json).toString());

export { jsonToUrlParam };
