/*
 * @Author: fantiga
 * @Date: 2022-05-23 10:56:30
 * @LastEditTime: 2022-12-17 18:03:16
 * @LastEditors: fantiga
 * @FilePath: /react-github-ts/src/utils/request.tsx
 */

/* eslint-disable prefer-const */

import axios from 'axios';
import { TAxiosOption } from './interface';

const SUCCESS_CODE = 1;

const WITH_BODY_REQUESTS = ['put', 'get', 'post', 'patch'];

/**
 * Package Axios / 封装Axios
 * @param options
 * @returns
 */
const fetch = (options: TAxiosOption) => {
  let {
    url,
    method = 'get',
    headers = {
      'Content-Type': 'application/jsonutf-8',
      'X-Requested-With': 'XMLHttpRequest',
    },
    ...restOptions
  } = options;

  if (typeof options === 'string') {
    url = options;
    method = 'get';
  }
  method = method.toLowerCase();

  if (WITH_BODY_REQUESTS.includes(method)) {
    return axios({
      url,
      method,
      headers,
      ...restOptions,
    });
  } else {
    return axios({
      url,
      method,
      headers,
      ...restOptions,
    });
  }
};

/**
 * Promise chain after encapsulating axios request / 封装axios请求后的Promise链
 * @param options
 * @returns
 */
export default async function request(options: TAxiosOption) {
  return fetch(options)
    .then((response) => {
      const { status: statusCode, statusText, data: resData } = response;
      const { code, msg } = resData;
      const meta = {
        success: SUCCESS_CODE === code,
        message: msg || statusText,
        statusCode,
        code,
      };

      return { ...meta, ...resData };
    })
    .catch((error) => {
      const { response } = error;
      let message;
      let statusCode;
      if (response && response instanceof Object) {
        const { status, statusText, data } = response;
        const { msg } = data;
        statusCode = status;
        message = msg || statusText;
      }
      return { success: false, message, statusCode };
    });
}
