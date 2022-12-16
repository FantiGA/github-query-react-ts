/*
 * @Author: fantiga
 * @Date: 2022-12-13 20:53:04
 * @LastEditTime: 2022-12-16 22:30:07
 * @LastEditors: fantiga
 * @Description:
 * @FilePath: /react-github-ts/src/pages/Index.tsx
 */

import Query from '@components/Query';
import Result from '@components/Result';

import Box from '@mui/material/Box';
import request from '@/utils/request';
import { jsonToUrlParam } from '@/utils/common';

const Index: React.FC = () => {
  const url = 'https://api.github.com/search/repositories';
  const getKeyword = (keyword: any) => {
    const queryData = {
      q: keyword,
      per_page: 10,
      page: 1,
    };
    const queryString = jsonToUrlParam(queryData.toString());
    request({
      url: `${url}?${queryString}`,
      method: 'get',
    })
      .then((res) => {
        console.log('res', res);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <>
      <Box
        sx={{
          m: '2em',
        }}
      >
        <Query getKeyword={getKeyword} />
      </Box>
      <Box
        sx={{
          m: '2em',
        }}
      >
        <Result />
      </Box>
    </>
  );
};

export default Index;
