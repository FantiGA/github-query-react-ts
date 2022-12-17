/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:42:43
 * @LastEditTime: 2022-12-17 18:03:30
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/src/utils/interface.tsx
 */

import { GridColDef, GridRowsProp } from '@mui/x-data-grid';

type TColumn = GridColDef;

type TRow = GridRowsProp;

type TAxiosOption = {
  url: string;
  method: string;
  timeout?: 5000;
  data?: object;
  headers?: object;
};

type TQuery = {
  getKeyword: (keyword: string) => void;
};

type TResult = {
  keyword: string;
};

export { TColumn, TRow, TAxiosOption, TQuery, TResult };
