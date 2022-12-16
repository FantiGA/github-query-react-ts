/*
 * @Author: fantiga
 * @Date: 2022-05-23 16:42:43
 * @LastEditTime: 2022-12-16 21:53:12
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/utils/interface.tsx
 */

type TAxiosOption = {
  url: string;
  method: string;
  timeout?: 5000;
  data?: object;
  headers?: object;
};

type TInputQQ = {
  inputQq: string;
};

interface IInput {
  param: TInputQQ;
  setParam: () => void;
}

type IResult = {
  name?: string;
  qlogo?: string;
  qq?: string;
  code?: number;
  message?: string;
  success?: boolean;
  statusCode?: number;
  lvzuan?: object;
};

interface IQQInfo {
  info: IResult;
}

export { TAxiosOption, TInputQQ, IInput, IResult, IQQInfo };
