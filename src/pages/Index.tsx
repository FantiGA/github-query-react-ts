/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:53:04
 * @LastEditTime: 2022-12-13 20:56:32
 * @LastEditors: fantiga
 * @Description: 
 * @FilePath: /react-github-ts/src/pages/Index.tsx
 */

import { useState } from "react";
import { IResult, TInputQQ } from "@/utils/interface";
import request from "@/utils/request";
import { useDebouncedEffect } from "@/utils/common";
import Query from "@/components/Query";
import Result from "@/components/Result";

const Index: React.FC = () => {
  // 设置输入参数
  const [param, setParam] = useState<TInputQQ>({ inputQq: '' });
  // 设置查询信息
  const [info, setInfo] = useState<IResult>({ code: 0, message: '', statusCode: 200, success: false, });
  // 设置loading
  const [loading, setLoading] = useState(true);
  // 设置API URL
  const url = 'https://docs.github.com/en/rest/reference/search';


  const getQQInfo = ({ inputQq }: TInputQQ) => {
    /**
     * 虽然input已加type='number'属性，理论上只能输入数字，
     * 但是安全起见，请求前仍然做一个非数字判断。
     */
    if (inputQq && /\D/g.test(inputQq)) {
      console.log('已屏蔽非数字');
      setParam({
        inputQq: inputQq.replace(/[^0-9]/g, '')
      });
      return false;
    }

    setLoading(true);

    request({
      url: `${url}?qq=${inputQq}`,
      method: 'get',
    }).then(res => {
      setInfo(res);
      setLoading(false);
    }).catch(e => {
      console.log(e);
      setLoading(false);
    });
  };

  useDebouncedEffect(() => getQQInfo(param), 500, [param]);

  return <div className='container'>
    <div className='wrapper'>
      <Query param={param!} setParam={setParam} />
      <div>
        {
          loading ?
            <div className='loading'>Loading...</div> :
            info.code !== 1 ?
              <div className='errorMsg'>Error: {info.message}</div> :
              <Result info={info} />
        }
      </div>
    </div>
  </div>;
};

export default Index;